Meteor.methods({
	searchSpotify: function() {
		var spotifyApi = new SpotifyWebApi();
		var response = spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3');
		return response.data.body.name;
	},
	getGenreSeeds: function() {
		try {
			return spotifyGenreSeeds().data.genres;
		}
		catch(e) {
			return 'error'
		}
	},
	getSpotifyTracks: function(formData) {
		var min_tempo, max_tempo, genre, timeRemaining, response;
		var returnTracks = [];
		var errorData = [];
		formData.forEach(function(mile) {
			var tempo = mile.tempo / 100;
			min_tempo = tempo - 0.1  < 0 ? 0 : tempo - 0.1;
			max_tempo = tempo - 0.1  > 1 ? 1 : tempo + 0.1;
			console.log('min: ', min_tempo);
			console.log ('max: ', max_tempo);
			genre = mile.genre.replace(' ', '-');
			timeRemaining = mile.time;
			var tracks = getSpotifyData(timeRemaining, genre, min_tempo, max_tempo, mile.mile);
			tracks.forEach(function(innerTrack) {
				innerTrack.mile = mile.mile;
				if (innerTrack.artists[0].name === "Error") {
					errorData.push(mile.mile);
				}
			});
			returnTracks.push(tracks);
		})

		var flattendTracks = [].concat.apply([], returnTracks);
		return {tracks: flattendTracks, errors: errorData};
	},

	getFollowerCount: function() {
    var spotifyApi = new SpotifyWebApi();
    var response = spotifyApi.createPlaylist(Meteor.user().services.spotify.id, playlistName, { public: false });

    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.getMySavedTracks({});
    }
    return response.data.body.followers.total;
	},

	createPlaylist: function(playlistName, tracks) {
		console.log('importing');
		var spotifyApi = new SpotifyWebApi();
		var trackUris = tracks.map(function(track) {
			if (track.uri) {
				return track.uri;
			}
    });
		var response = spotifyApi.createPlaylist(Meteor.user().services.spotify.id, playlistName, { public: false });

		if (checkTokenRefreshed(response, spotifyApi)) {
			response = spotifyApi.createPlaylist(Meteor.user().services.spotify.id,
				playlistName, { public: false });
    }
    var addTrackResponse = spotifyApi.addTracksToPlaylist(Meteor.user().services.spotify.id,
    	response.data.body.id, trackUris, {});

    return addTrackResponse.data;
	},

	checkAccessToken: function() {
		var spotifyApi = new SpotifyWebApi();
		var response = spotifyApi.getMe();

		if (response.error && response.error.statusCode === 401) {
			return false
		}
		else {
			return response.data.body
		}
	}

})


var checkTokenRefreshed = function(response, api) {
  if (response.error && response.error.statusCode === 401) {
    api.refreshAndUpdateAccessToken();
    return true;
  } else {
    return false;
  }
}


function spotifyRecommendation(genre, min_energy, max_energy) {
	var spotifyApi = new SpotifyWebApi();
	return HTTP.get('https://api.spotify.com/v1/recommendations', {
			"headers": {
				"Authorization": 'Bearer ' + spotifyApi.getAccessToken()
			},
			"params": {
				"seed_genres": genre,
				"min_energy": min_energy,
				"max_energy": max_energy
			}
		})
}

function spotifyGenreSeeds() {
	var spotifyApi = new SpotifyWebApi();
	return HTTP.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
			"headers": {
				"Authorization": 'Bearer ' + spotifyApi.getAccessToken()
			}
	})
}

function getSpotifyData(timeRemaining, genre, min_energy, max_energy) {
	var returnTracks = [];
	var errorObj = {artists: [{name: "Error"}], name: "No data found for the search parameter", duration_ms: 0}
	response = spotifyRecommendation(genre, min_energy, max_energy);
	if (response.statusCode === 200) {
			tracks = response.data.tracks;
			if (tracks.length === 0) {
				errorObj.id = (Math.floor(Math.random()*100000)).toString();
				returnTracks.push(errorObj)
			}
			else {
			var returnTracks = findOptimalSubset(tracks, timeRemaining);
			}

	} else {
		returnTracks.push('there was an error');
	}
	return returnTracks;
}

function findOptimalSubset(numbers, target) {
  var solutions = [], currentBest

  function subsetSum(numbers, target, partial = [])   {
     if (partial.length > 0) {

      solution = partial.reduce(function(total, currentTrack) {
      	return (total + currentTrack.duration_ms);
      }, 0);

      diffFromTarget = Math.abs(target - solution);
      if ( currentBest === undefined || diffFromTarget < currentBest ){
        currentBest = diffFromTarget;
				console.log(partial);
        solutions.push(partial);
      }
    }
    for (var index = 0; index < numbers.length;  index++) {
    	if (currentBest === 0) {
				return solutions;
        break;
    	}
    	else {
	      var n = numbers[index];
	      var remaining = numbers.slice(index + 1, numbers.length);
	      var newPartial = partial.concat(n);
	      subsetSum(remaining, target, newPartial);
	    }
    }
    return solutions;
  }
  var subsets = subsetSum(numbers, target)
  return subsets[subsets.length - 1];
}
/*questions:
URL parameters - better?
async server request with Meteor
*/
/*to do:
-If subsetSum finds number equal to target or within range, break
-Update form style
-update number input
-Update table style to show breakdown for miles
*/

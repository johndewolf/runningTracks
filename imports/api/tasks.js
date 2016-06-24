Meteor.methods({
	searchSpotify: function() {
		console.log('running')
		var spotifyApi = new SpotifyWebApi();
		var response = spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3');
		console.log(spotifyApi);
		return response.data.body.name;
	},
	getGenreSeeds: function() {
		var response = spotifyGenreSeeds();
		if (response.statusCode === 200) {
			return response.data.genres;
		}
	},
	getSpotifyTracks: function(genre, energy, timeRemaining) {
		var min_energy = energy.split('|')[0];
		var max_energy = energy.split('|')[1];

		genre = genre.replace(' ', '-');
		//get time in milliseconds
		timeRemaining = timeRemaining * 60000;
		var returnTracks = [];
		var response;
		while (timeRemaining > 0) {
			response = spotifyRecommendation(genre, min_energy, max_energy);

			if (response.statusCode === 200) {

					var tracks = response.data.tracks;
					if (response.data.tracks.length === 0) {
						break;
					}
					for (var x = 0; x < tracks.length; x++) {
						returnTracks.push(tracks[x]);
						timeRemaining -= tracks[x].duration_ms;
						if (timeRemaining < 0) {
							break;
						}
					}
			} else {
				returnTracks.push('there was an error');
				break;
			}
		}
		return returnTracks;

	},
	getUserId: function() {
		return Meteor.user().services.spotify.id
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
		var spotifyApi = new SpotifyWebApi();
		var trackUris = tracks.map(function(track) {
      return track.uri;
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
			return true
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

/*questions:
URL parameters - better?
async server request with Meteor
*/ 
/*to do:
--api call for playlist submit
handle errors and check for parameters on playlists results page
type ahead for genres
prevent double tracks in playlists
add and remove tracks
*/

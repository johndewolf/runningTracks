Meteor.methods({
	searchSpotify: function() {
		console.log('running')
		var spotifyApi = new SpotifyWebApi();
		var response = spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3');
		console.log(spotifyApi);
		return response.data.body.name;
	},
	getSpotifyTracks: function(genre, energy, timeRemaining) {
		var min_energy = energy.split('|')[0];
		var max_energy = energy.split('|')[1];
		console.log(timeRemaining);
		genre = genre.replace(' ', '-');
		//get time in milliseconds
		timeRemaining = timeRemaining * 60000;
		
		var returnTracks = [];
		var response;
		while (timeRemaining > 0) {
			response = spotifyRecommendation(genre, min_energy, max_energy);
			if (response.statusCode === 200) {
				response.status
					var tracks = response.data.tracks;

					for (var x = 0; x < tracks.length; x++) {
						returnTracks.push(tracks[x]);
						timeRemaining -= tracks[x].duration_ms;
						if (timeRemaining < 0) {
							break;
						}
					}
			} else if (response.error) {
				break;
			}
		}
		return returnTracks;

	},
	getFollowerCount: function() {
    var spotifyApi = new SpotifyWebApi();
    var response = spotifyApi.getMe();
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.getMySavedTracks({});
    }
    return response.data.body.followers.total;
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

/*questions:
URL parameters - better?
async server request with Meteor
*/ 
/*to do:
api call for playlist submit
handle errors and check for parameters on playlists results page
type ahead for genres
*/

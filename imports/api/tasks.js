Meteor.methods({
	searchSpotify: function() {
		console.log('running')
		var spotifyApi = new SpotifyWebApi();
		var response = spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3');
		console.log(spotifyApi);
		return response.data.body.name;
	},
	getSpotifyTracks: function(genre, energy, timeRemaining) {
		var spotifyApi = new SpotifyWebApi();
		var min_energy = energy.split('|')[0];
		var max_energy = energy.split('|')[1];
		genre = genre.replace(' ', '-');
		//get time in milliseconds
		timeRemaining = timeRemaining * 60000;
		var returnTracks = [];
		var response = HTTP.get('https://api.spotify.com/v1/recommendations', {
			"headers": {
				"Authorization": 'Bearer ' + spotifyApi.getAccessToken()
			},
			"params": {
				"seed_genres": genre,
				"min_energy": min_energy,
				"max_energy": max_energy
			}
		})
		var index = 0;
		var tracks = response.data.tracks;

		while (timeRemaining > 0) {
			returnTracks.push(tracks[index]);
			timeRemaining -= tracks[index].duration_ms;
			index++;
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
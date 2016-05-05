import keys from './keys.js';
Meteor.startup(() => {
	ServiceConfiguration.configurations.update(
    { "service": "spotify" },
    {
      $set: {
        "clientId": keys.spotifyClient,
        "secret": keys.spotifySecret,
        "redirect_uri": 'http://localhost:3000/_oauth/spotify?close'
      }
    },
    { upsert: true }
	);
});
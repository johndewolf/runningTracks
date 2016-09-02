
Meteor.startup(() => {
	ServiceConfiguration.configurations.update(
    { "service": "spotify" },
    {
      $set: {
        "clientId": Meteor.settings.spotifyClient,
        "secret": Meteor.settings.spotifySecret,
        "redirect_uri": Meteor.settings.spotifyRedirect
      }
    },
    { upsert: true }
	);
});
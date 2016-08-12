import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'
const StreamPlaylist = ({spotifyData}) => {
	console.log('from ui: ' + spotifyData);
	var tracks = spotifyData.map(function(track, i) {
		return (
			track.id
		)
	}).join();
	var url = "https://embed.spotify.com/?uri=spotify:trackset:runningTracks:" + tracks
	console.log(url);
	return (
		<div>
			<h1>Stream Playlist</h1>
				<iframe src={url} frameborder="0" width="100%" height="80" allowtransparency="true"></iframe>
		</div>
	)
}

export default StreamPlaylist;
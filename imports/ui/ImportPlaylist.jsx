import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'
const ImportPlaylist = ({onImportPlaylist, onNameUpdate, playlistName, spotifyData, playlistSubmitted, returnData}) => {
	let responseMessage;
	if (returnData.statusCode === 201) {
		responseMessage = (
			<div>
				<p>{playlistName} was imported with great success!</p>
				<p><Link to="/quick">Click here</Link> to create another playlist</p>
			</div>
		)
	} else {
		responseMessage = (
			<div>
				<p>Horrible failure</p>
				<p><Link to="/quick">Click here</Link> to give it another shot</p>
			</div>
		)
	}
	return (
		<div>
			<h1>Import Playlist</h1>
			{playlistSubmitted ? responseMessage :
			<form onSubmit={onImportPlaylist}>
				<label htmlFor="playlist-name">Playlist Name</label>
				<input onChange={onNameUpdate} name="playlist-name" type="text" required></input>
				<button type="submit" className='btn margin-top'>Import</button>
			</form>}
		</div>
	)
}

export default ImportPlaylist;
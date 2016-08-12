import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'
const ImportPlaylist = ({onImportPlaylist, onNameUpdate, playlistName, tracks, playlistSubmitted, returnData, showImport, onCloseImport, onShowImport}) => {
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

	if ( showImport === true ) {

		return (
			<div>
				<h1>Import Playlist</h1>
				{playlistSubmitted ? responseMessage :
				<form onSubmit={onImportPlaylist}>
					<label htmlFor="playlist-name">Playlist Name</label>
					<input onChange={onNameUpdate} name="playlist-name" type="text" required></input>
					<button type="submit" className='btn margin-top'>Import</button><button type='button' className="margin-left warning" onClick={onCloseImport}>Cancel</button>
				</form>}
			</div>
		)
	}
	else {
		return (
			<div className="addMile" onClick={onShowImport}><i className="material-icons">add_circle_outline</i> <span>Import to Your Account</span></div>
		)
	}
}

export default ImportPlaylist;
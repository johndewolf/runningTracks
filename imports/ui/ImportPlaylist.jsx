import React, { Component, PropTypes } from 'react';

const ImportPlaylist = ({onImportPlaylist, onNameUpdate, playlistName, tracks, playlistSubmitted, returnData}) => {
	return (
		<div>
			<h1>Import Playlist</h1>
			{playlistSubmitted ? <p>{playlistName} - {returnData.statusCode}</p>:
			<form onSubmit={onImportPlaylist}>
				<input onChange={onNameUpdate} type="text"></input>
				<button type='button' type="submit" className='btn btn-large btn-success'>Import!</button>
			</form>}
		</div>
	)
}

export default ImportPlaylist;
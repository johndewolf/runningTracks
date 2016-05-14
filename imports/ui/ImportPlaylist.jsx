import React, { Component, PropTypes } from 'react';

const ImportPlaylist = ({onImportPlaylist, onNameUpdate, playlistName, tracks, playlistSubmitted}) => {
	return (
		<div>
			<h1>Import Playlist</h1>
			{playlistSubmitted ? <p>Submitted Playlist: {playlistName}</p>:
			<form onSubmit={onImportPlaylist}>
				<input onChange={onNameUpdate} type="text"></input>
				<button type='button' type="submit" className='btn btn-large btn-success'>Import!</button>
			</form>}
			<ul>
				{tracks}
			</ul>
		</div>
	)
}

export default ImportPlaylist;
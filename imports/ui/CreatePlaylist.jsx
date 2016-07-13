import React, { Component, PropTypes } from 'react';
import PlaylistFieldGroupContainer from '../containers/PlaylistFieldGroupContainer';
const CreatePlaylist = (props) => {
	
	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-8 col-xs-offset-2">
					<h1>Playlist Details</h1>
					<form onSubmit={props.onPlaylistSubmit}>
						<PlaylistFieldGroupContainer {...props} />
						<button type='button' type="submit" className='margin-top'>Go!</button>
					</form>
				</div>
			</div>
		</div>
	)
}
/*
Multiple genres,
genre type ahead,
more search options
energy level range
export playlist to spotify
*/
export default CreatePlaylist
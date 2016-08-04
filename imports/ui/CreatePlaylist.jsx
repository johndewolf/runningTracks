import React, { Component, PropTypes } from 'react';
import PlaylistFieldGroupContainer from '../containers/PlaylistFieldGroupContainer';
const CreatePlaylist = (props) => {
	var formFields = props.formGroups.map(function(group, i) {
		return (<PlaylistFieldGroupContainer {...props} mile={group.mile} key={i} />);
	})

	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-8 col-xs-offset-2">
					<h1>Playlist Details</h1>
					<form onSubmit={props.onPlaylistSubmit}>
						{formFields}
						<div className="addMile" onClick={props.onAddFieldGroup}><i className="material-icons">add_circle_outline</i> <span>Add Mile</span></div>

						<button type='button' type="submit" className='margin-top'>Generate Playlist</button>
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
import React, { Component, PropTypes } from 'react';
import PlaylistFieldGroup from './PlaylistFieldGroup'
import formFields from '../containers/PlaylistFieldGroupContainer';
const CreatePlaylistPerMile = (props) => {
	const renderFields = [formFields(PlaylistFieldGroup, ...props)];
	let fieldGroup = 1;
	
	
	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-8 col-xs-offset-2">
					<h1>Playlist Details</h1>
					<div id="miles-form">
						<p>How many miles are you going to run?</p>
						<input type="number" name="miles" id="miles"
                min="1" max="30" step="1" defaultValue="5" onChange={props.onMilesUpdate}></input>
          	<a href="#" onClick={props.onMilesClick}>Enter</a> 
          	</div>
          	{renderFields}
				</div>
			</div>
		</div>
	)
}

CreatePlaylistPerMile.propTypes = {
	tempo: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	genre: PropTypes.string.isRequired,
	onUpdateTempo: PropTypes.func.isRequired,
	onUpdateTime: PropTypes.func.isRequired,
	onUpdateGenre: PropTypes.func.isRequired,
	availableGenres: PropTypes.array.isRequired
}

/*
Multiple genres,
genre type ahead,
more search options
energy level range
export playlist to spotify
*/
export default CreatePlaylistPerMile
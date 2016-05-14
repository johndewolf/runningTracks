import React, { Component, PropTypes } from 'react';
import PlaylistResults from './PlaylistResults';

const CreatePlaylist = ({onPlaylistSubmit, onUpdateTempo, onUpdateGenre, onUpdateTime, distance, avgPace, time, genre}) => {
	return (
		<div>
			<h1>Playlist Details</h1>
			<form onSubmit={onPlaylistSubmit}>
			
				<div className="form-group">
					<select name="tempo" className='form-control' onChange={onUpdateTempo} > 
						<option value>--Tempo--</option>
						<option value="0.0|0.4">Low</option>
						<option value="0.4|0.7">Medium</option>
						<option value="0.7|1">High</option>
					</select>
				</div>
				<p>{time || 0} minutes</p>
				<div className="form-group">
					<input
						className='form-control'
						placeholder='Goal Time'
						type='range'
						defaultValue='0'
						step='1'
						min='2'
						max='60'
						required
						onChange={onUpdateTime} />
				</div>
				<div className="form-group">
					<input
						className='form-control'
						placeholder='Genre'
						type='text'
						required
						onChange={onUpdateGenre} />
				</div>
				<button type='button' type="submit" className='btn btn-large btn-success'>Go!</button>
			</form>
		</div>
	)
}

CreatePlaylist.propTypes = {
	tempo: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	genre: PropTypes.string.isRequired,
	onUpdateTempo: PropTypes.func.isRequired,
	onUpdateTime: PropTypes.func.isRequired,
	onUpdateGenre: PropTypes.func.isRequired
}

/*
Multiple genres,
genre type ahead,
more search options
energy level range
export playlist to spotify
*/
export default CreatePlaylist
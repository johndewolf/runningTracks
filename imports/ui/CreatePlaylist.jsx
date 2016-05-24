import React, { Component, PropTypes } from 'react';
import PlaylistResults from './PlaylistResults';

const CreatePlaylist = ({onPlaylistSubmit, onUpdateTempo, onUpdateGenre, onUpdateTime, distance, avgPace, time, genre, availableGenres}) => {
	var genreList = availableGenres.map(function(genre,i) {
			return <option value={genre} key={i} />
	})
	return (
		<div>
			<h1>Playlist Details</h1>
			<form onSubmit={onPlaylistSubmit}>
			
				<div className="form-group">
					<label htmlFor="tempo">Tempo</label>
					<select name="tempo" id="tempo" className='dropDown' onChange={onUpdateTempo} > 
						<option value="0.0|0.2">Low</option>
						<option value="0.4|0.7">Medium</option>
						<option value="0.9|1">High</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="length">Playlist Length</label>
					<p>{time || 0} minutes</p>
					<input
						className='form-control'
						placeholder='Goal Time'
						type='range'
						id="length"
						defaultValue='0'
						step='1'
						min='2'
						max='60'
						required
						onChange={onUpdateTime} />
				</div>
				<div className="form-group">
					<label htmlFor="genre">Genre</label>
					<input
						id="genre"
						className='form-control'
						type='text'
						list="genres"
						required
						onChange={onUpdateGenre} />
				</div>
				<datalist id="genres">
					{genreList}
				</datalist>
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
export default CreatePlaylist
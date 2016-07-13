import React, { Component, PropTypes } from 'react';

const PlaylistFieldGroup = ({onUpdateTempo, onUpdateGenre, onUpdateTime, time, genre, availableGenres}) => {
	var genreList = availableGenres.map(function(genre,i) {
			return <option value={genre} key={i} />
	})
	return (
				<div>
					<div className="form-group">
						<label htmlFor="tempo">Tempo</label>
						<select name="tempo" id="tempo" className='dropDown' onChange={onUpdateTempo} > 
							<option value="0.1|0.2">Low</option>
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
				</div>
				)
}
export default PlaylistFieldGroup
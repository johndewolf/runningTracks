import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
const PlaylistFieldGroup = ({onUpdateTempo, onUpdateGenre, onUpdateTime, onDeleteFieldGroup, genre, availableGenres, fieldGroups, mile, styles}) => {
	var genreList = availableGenres.map(function(genre,i) {
			return <option value={genre} key={i} />
	})

  var currentTime = fieldGroups.filter(function(group) {
  	return group.mile === mile;
  })[0].time;

  function millisToMinutesAndSeconds(millis) {
	  var minutes = Math.floor(millis / 60000);
	  var seconds = ((millis % 60000) / 1000).toFixed(0);
	  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
	}

	return (
				<Motion
				  defaultStyle={{x: 0, y: 0}}
				  style={{x: spring(1), y: spring(370)}}>
				  {style =>

				 <div style={{opacity: style.x, height: style.y}}>

					<div className="row between-xs middle-xs">
						<div className="col-xs-6">
						<h3>Mile {mile}</h3>
						</div>
						<div className="col-xs-6 text-right">
						{mile > 1 ? <i className="material-icons delete" onClick={onDeleteFieldGroup}>remove_circle</i> : null }
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="tempo">Tempo</label>
						<select name="tempo" id="tempo" className='dropDown' onChange={onUpdateTempo} >
							<option value="0.1|0.2">Low</option>
							<option value="0.4|0.7">Medium</option>
							<option value="0.9|1">High</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="length">Mile Time Length</label>
						<span className="time-value">{millisToMinutesAndSeconds(currentTime) || 0} minutes</span>

						<input
							className='form-control'
							placeholder='Goal Time'
							type='range'
							id="length"
							defaultValue='480000'
							step='15000'
							min='240000'
							max='3600000'
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

				  }
				</Motion>

				)
}
export default PlaylistFieldGroup

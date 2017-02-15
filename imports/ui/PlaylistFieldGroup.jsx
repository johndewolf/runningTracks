import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
const PlaylistFieldGroup = ({onUpdateTempo, onUpdateGenre, onUpdateMinutes, onUpdateSeconds, onDeleteFieldGroup, genre, availableGenres, fieldGroups, mile, styles}) => {
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
				  style={{x: spring(1), y: spring(290)}}>
				  {style =>

				 <div style={{opacity: style.x, height: style.y}} className="mile-group">
					 <div className="row between-xs middle-xs">
						 <div className="col-xs-12 col-sm-12 col-md-6">
							 <h3>Mile {mile}</h3>
						 </div>
						 <div className="col-xs-12 col-sm-12 col-md-6 text-right">
						 {mile > 1 ? <i className="material-icons delete" onClick={onDeleteFieldGroup}>remove_circle</i> : null }
						 </div>
					 </div>

					 <div className="form-group">
						 <fieldset>
							 <legend>Mile Duration</legend>

							 <input
								 className='form-control'
								 placeholder='Goal Time'
								 type='number'
								 id="length"
								 name="duration_min"
								 defaultValue='8'
								 min='4'
								 max='60'
								 required
								 onChange={onUpdateMinutes} />
							 <label htmlFor="duration_min" className="label__inline">min</label>
							 <input
								 className='form-control'
								 placeholder='Goal Time'
								 type='number'
								 id="duration_secs"
								 defaultValue='00'
								 min='0'
								 max='59'
								 onChange={onUpdateSeconds}
								 required />
							 <label htmlFor="duration_min" className="label__inline">secs</label>
						 </fieldset>
					 </div>

						<div className="form-group">
							<label htmlFor="tempo">Track Tempo</label>
							<input
								className='form-control'
								type='range'
								id="tempo"
								defaultValue='50'
								step='1'
								min='1'
								max='100'
								required
								onChange={onUpdateTempo} />
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

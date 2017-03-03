import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
const PlaylistFieldGroup = ({onUpdateTempo, onUpdateGenre, onUpdateMinutes, onUpdateSeconds, onDeleteFieldGroup, genre, availableGenres, mile, styles, fieldGroups}) => {
	var genreList = availableGenres.map(function(genre,i) {
			return <option value={genre} key={i} />
	})
	var fieldData = fieldGroups[mile - 1]
  function millisToMinutesAndSeconds(millis) {
	  return {minutes: Math.floor(millis / 60000), seconds: ((millis % 60000) / 1000).toFixed(0)}
	}
	var time = millisToMinutesAndSeconds(fieldData.time)
	return (
				<div>
				 <div className="mile-group">
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
								 value={time.minutes}
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
								 value={time.seconds}
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
								step='1'
								min='1'
								max='100'
								value={fieldData.tempo}
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
								value={fieldData.genre}
								required
								onChange={onUpdateGenre} />
						</div>
						<datalist id="genres">
							{genreList}
						</datalist>
					</div>
				</div>
				)
}
export default PlaylistFieldGroup

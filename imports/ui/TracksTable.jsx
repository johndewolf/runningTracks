import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const TracksTable = ({spotifyData, onDeleteTrack}) => {

		function millisToMinutesAndSeconds(millis) {
		  var minutes = Math.floor(millis / 60000);
		  var seconds = ((millis % 60000) / 1000).toFixed(0);
		  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		}
		var playListLength = 0;
		var tracks = spotifyData.map(function(track,i) {
			return (
				<tr key={i}>
					<td>{track.artists[0].name}</td>
					<td>{track.name}</td>
					<td>{millisToMinutesAndSeconds(track.duration_ms)}</td>
					<td><i className="material-icons delete" onClick={onDeleteTrack} data-trackid={track.id}>remove_circle</i></td>
				</tr>
			)
		})

		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Artist</th>
							<th>Song</th>
							<th>Duration</th>
						</tr>
					</thead>

				  <ReactCSSTransitionGroup transitionName="example" component="tbody" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{tracks.length > 0 ? tracks : <tr><td>Sorry no results, please try again</td></tr>}
					</ReactCSSTransitionGroup>
				</table>
			</div>
		)
}

export default TracksTable
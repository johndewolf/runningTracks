import React, { Component, PropTypes } from 'react';

const TracksTable = ({spotifyData}) => {

		function millisToMinutesAndSeconds(millis) {
		  var minutes = Math.floor(millis / 60000);
		  var seconds = ((millis % 60000) / 1000).toFixed(0);
		  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		}
		var playListLength = 0;
		if (spotifyData.length === 0) {
			var tracks = <tr><td>Sorry no tracks found, please try a different search</td></tr>
		}
		else {
			var tracks = spotifyData.map(function(track,i) {
				return (
					<tr key={i}>
						<td>{track.artists[0].name}</td>
						<td>{track.name}</td>
						<td>{millisToMinutesAndSeconds(track.duration_ms)}</td>
					</tr>
				)
			})
		}
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
					<tbody>
						{tracks}
					</tbody>
				</table>
			</div>
		)
}

export default TracksTable
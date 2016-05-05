import React, { Component, PropTypes } from 'react';

class PlaylistResults extends Component {
	

	render(props) {
		if ( this.props.isLoading === false ) {
			var tracks = this.props.spotifyData.map(function(track,i) {
				return <li key={i}><b>{track.artists[0].name}</b> - {track.name}</li>
			})
			return (
				<div>
					<h1>Results!</h1>
					<p><b>Spotify:</b> {tracks}</p>
					<p><b>Genre:</b> {this.props.genre}</p>
					<p><b>Time:</b> {this.props.time}</p>
					<p><b>Tempo:</b> {this.props.tempo}</p>
				</div>
			)
		}
		else return (
			<p>Loading...</p>
		)
	}
}

export default PlaylistResults;
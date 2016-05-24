import React, { Component, PropTypes } from 'react';
import ImportPlaylistContainer from '../containers/ImportPlaylistContainer';
class PlaylistResults extends Component {
	render(props) {
		if ( this.props.isLoading === false ) {
			var playListLength = 0;
			if (this.props.spotifyData.length === 0) {
				var tracks = <li>Sorry no tracks found, please try a different search</li>
			}
			else {
				var tracks = this.props.spotifyData.map(function(track,i) {
					playListLength += track.duration_ms / 60000;
					return <li key={i}><b>{track.artists[0].name}</b> - {track.name}</li>
				})
			}
			return (
				<div>
					<h1>Results! {playListLength}</h1>
					<p><b>Spotify:</b></p>
					<ul>
						{tracks}
					</ul>
					<p><b>Genre:</b> {this.props.genre}</p>
					<p><b>Time:</b> {this.props.time}</p>
					<p><b>Tempo:</b> {this.props.tempo}</p>
					{this.props.showImport ? <ImportPlaylistContainer spotifyData={this.props.spotifyData} /> :
					<div>
						<p>Import this playlist into your Spotify account <button onClick={this.props.onImportClick}>here</button></p>
						<p>Or try <a href="/quick">another</a> search</p>
					</div> }
				</div>
			)
		}
		else return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}
}

export default PlaylistResults;
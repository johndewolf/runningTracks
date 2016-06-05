import React, { Component, PropTypes } from 'react';
import ImportPlaylistContainer from '../containers/ImportPlaylistContainer';
import TracksTableContainer from '../containers/TracksTableContainer';

class PlaylistResults extends Component {
	render(props) {
		if ( this.props.isLoading === true ) {
			return (
				<div className="container">
					<p>Loading...</p>
				</div>
			)
		} 
		else {
			return (
				<div className="container md">
					<h1>RESULTS</h1>
					<TracksTableContainer spotifyData={this.props.spotifyData} />
					{this.props.showImport ? <ImportPlaylistContainer spotifyData={this.props.spotifyData} /> :
					<div>
						<p>Import this playlist into your Spotify account <button onClick={this.props.onImportClick}>here</button></p>
						<p>Or try <a href="/quick">another</a> search</p>
					</div> }
				</div>
			)
		}
	}
}

export default PlaylistResults;
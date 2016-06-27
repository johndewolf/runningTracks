import React, { Component, PropTypes } from 'react';
import ImportPlaylistContainer from '../containers/ImportPlaylistContainer';
import TracksTable from './TracksTable';
import AlbumArt from './AlbumArt.jsx';
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
				<div className="container">
					<div className="flexcontainer-row">
						<h1 className="flex-left">RESULTS</h1>
						<div className="flex-right">
							<AlbumArt spotifyData={this.props.spotifyData} />
						</div>
					</div>
					<TracksTable spotifyData={this.props.spotifyData} />
					{this.props.showImport ? <ImportPlaylistContainer spotifyData={this.props.spotifyData} /> :
					<div className="flexcontainer-row margin-top">
						<div classsName="flex-left">
							<p>Click below to import into your Spotify account</p>
							<a className="btn margin-top" onClick={this.props.onImportClick}>Import</a></div>
						<div className="flex-right">
							<p>Or try another search</p>
							<a href="/quick" className="btn margin-top">Search Again</a>
						</div>
					</div> }
				</div>
			)
		}
	}
}

export default PlaylistResults;
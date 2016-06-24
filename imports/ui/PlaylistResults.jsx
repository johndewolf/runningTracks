import React, { Component, PropTypes } from 'react';
import ImportPlaylistContainer from '../containers/ImportPlaylistContainer';
import TracksTable from './TracksTable';

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

					<div className="row">
						<div className="col-sm-8 col-sm-offset-2">
							<h1>RESULTS</h1>
							<TracksTable spotifyData={this.props.spotifyData} />
							{this.props.showImport ? <ImportPlaylistContainer spotifyData={this.props.spotifyData} /> :
							<div className="flexcontainer-row">
								<p classsName="flex-left">Import this playlist into your Spotify account <button onClick={this.props.onImportClick}>here</button></p>
								<p className="flex-right">Or try <a href="/quick">another</a> search</p>
							</div> }
						</div>
					</div>
				</div>
			)
		}
	}
}

export default PlaylistResults;
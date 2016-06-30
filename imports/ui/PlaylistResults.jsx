import React, { Component, PropTypes } from 'react';
import ImportPlaylistContainer from '../containers/ImportPlaylistContainer';
import TracksTable from './TracksTable';
import AlbumArt from './AlbumArt.jsx';

const PlaylistResults = ({spotifyData, isLoading, onImportClick, showImport}) => {
	if ( isLoading === true ) {
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
						<AlbumArt spotifyData={spotifyData} />
					</div>
				</div>
				<TracksTable spotifyData={spotifyData} />
				{showImport ? <ImportPlaylistContainer spotifyData={spotifyData} /> :
				<div className="flexcontainer-row margin-top">
					<div classsName="flex-left">
						<p>Click below to import into your Spotify account</p>
						<a className="btn margin-top" onClick={onImportClick}>Import</a></div>
					<div className="flex-right">
						<p>Or try another search</p>
						<a href="/quick" className="btn margin-top">Search Again</a>
					</div>
				</div> }
			</div>
		)
	}
}


export default PlaylistResults;
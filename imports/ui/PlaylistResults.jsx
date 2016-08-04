import React, { Component, PropTypes } from 'react';
import ImportPlaylistContainer from '../containers/ImportPlaylistContainer';
import { Router, Route, Link, browserHistory } from 'react-router'
import TracksTableContainer from '../containers/TracksTableContainer';
import AlbumArt from './AlbumArt.jsx';

const PlaylistResults = ({spotifyData, isLoading, onImportClick, showImport}) => {
	function millisToMinutesAndSeconds(millis) {
		  var minutes = Math.floor(millis / 60000);
		  var seconds = ((millis % 60000) / 1000).toFixed(0);
		  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
	}
	var trackLength = spotifyData.reduce(function(previousValue, track,i) {
		return (
			previousValue + track.duration_ms
		)
	}, 0)

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
					<div className="flex-left">
						<h1>RESULTS</h1>
						<p>{spotifyData.length} tracks, {millisToMinutesAndSeconds(trackLength)}</p>
					</div>
					<div className="flex-right">
						<AlbumArt spotifyData={spotifyData} />
					</div>
				</div>
				<TracksTableContainer />
				{showImport ? <ImportPlaylistContainer spotifyData={spotifyData} /> :
				<div className="margin-top">
						<div className="addMile" onClick={onImportClick}><i className="material-icons">add_circle_outline</i> <span>Import to Your Account</span></div>
						<p className="margin-top">Or try another search</p>
						<Link to="/quick" className="btn">Search Again</Link>
				</div> }
			</div>
		)
	}
}


export default PlaylistResults;
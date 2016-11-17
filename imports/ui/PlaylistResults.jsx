import React, { Component, PropTypes } from 'react';
import ResultsFooterContainer from '../containers/ResultsFooterContainer';
import { Router, Route, Link, browserHistory } from 'react-router'
import TracksTableContainer from '../containers/TracksTableContainer';
import AlbumArt from './AlbumArt.jsx';

const PlaylistResults = ({spotifyData, isLoading, errors, onRemoveBanner}) => {
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
	let duration = 0;
	spotifyData.forEach(function(track, i) {
		if (track !== null) {
			duration += track.duration_ms;
		}
	})
	function flashMessage(errorArray) {
		if (errorArray.length === 1) {
			return (
				<div className="container flash-banner red-border" id="warning-banner">
					<div className="row">
						<div className="col-xs-6">There was an error with Mile {errorArray[0]}</div>
						<div className="col-xs-6 text-right"><i className="material-icons" onClick={onRemoveBanner}>close</i></div>
					</div>
				</div>



			)
		} else {
			return (
				<div className="container flash-banner red-border" id="warning-banner">
					<div className="row">
						<div className="col-xs-6">There were errors with Miles {errorArray.join(',')}</div>
						<div className="col-xs-6 text-right"><i className="material-icons" onClick={onRemoveBanner}>close</i></div>
					</div>
				</div>
			)
		}
	}
	if ( isLoading === true ) {
		return (
			<div className="container">
				<h1 className="text-center">Loading...</h1>
				<div className="load-container">
    			<div className="circle"></div>
  			</div>
			</div>
		)
	}

	else {
		return (

			<div>
				{ errors.length > 0 ? flashMessage(errors) : null }
				<div className="container">
					<div className="flexcontainer-row">
						<div className="flex-left">
							<h1>RESULTS</h1>
							<p>{spotifyData.length} tracks, {millisToMinutesAndSeconds(duration)}</p>
						</div>
						<div className="flex-right">
							<AlbumArt spotifyData={spotifyData} />
						</div>
					</div>
					<TracksTableContainer />
					<div className="margin-top">
						<ResultsFooterContainer />
					</div>
				</div>
			</div>
		)
	}
}


export default PlaylistResults;

import React, { Component, PropTypes } from 'react';
import ResultsFooterContainer from '../containers/ResultsFooterContainer';
import { Router, Route, Link, browserHistory } from 'react-router'
import TracksTableContainer from '../containers/TracksTableContainer';
import AlbumArt from './AlbumArt.jsx';
import FlashBannerContainer from '../containers/FlashBannerContainer.jsx'
import { LineChart } from 'react-d3';

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
	let chartData = [];
	let duration = 0;
	spotifyData.forEach(function(track, i) {
		if (track !== null) {
			duration += track.duration_ms;
			chartData.push({x: duration, y: i+1})
		}
	})
	console.log(spotifyData);
	function flashMessage(errorArray) {
		if (errorArray.length === 1) {
			var errorMessage = 'There was an error with Mile ' + errorArray[0];
		}
		else {
			var errorMessage = 'There were errors with Miles' + errorArray.join(',');
		}
		return (
			<FlashBannerContainer message={errorMessage} />
		)
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

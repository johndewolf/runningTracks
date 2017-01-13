import React, { Component, PropTypes } from 'react';
import ResultsFooterContainer from '../containers/ResultsFooterContainer';
import { Router, Route, Link, browserHistory } from 'react-router'
import TracksTableContainer from '../containers/TracksTableContainer';
import AlbumArt from './AlbumArt.jsx';
import FlashBannerContainer from '../containers/FlashBannerContainer.jsx'

const PlaylistResults = ({spotifyData, isLoading, errors, onRemoveBanner, formData}) => {
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
		}
	})
	formData.forEach(function(mile, i) {
		chartData.push({x: i+1, y: mile.tempo});
	})

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
		console.log(chartData);
		return (

			<div>
				{ errors.length > 0 ? flashMessage(errors) : null }
				<div className="container container-narrow">
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
				<div className="container">
					<XYPlot
					  width={600}
					  height={600}>
					  <HorizontalGridLines />
					  <LineSeries
					    color="red"
					    data={chartData}/>
						<XAxis title="Miles" tickTotal={chartData.length}/>
					  <YAxis tilte="Tempo" />
					</XYPlot>
				</div>
			</div>
		)
	}
}


export default PlaylistResults;

import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import ImportPlaylistContainer from '../containers/ImportPlaylistContainer';
import ChartPlaylistContainer from '../containers/ChartPlaylistContainer';
import StreamPlaylistContainer from '../containers/StreamPlaylistContainer';

const ResultsFooter = ({onShowImport, showImport, showStream, onShowChart, showChart, onShowStream, formData}) => {
	function footerElements() {
		return (
			<ul className="results-footer">
				<li><Link to="/quick"><i className="material-icons">search</i> Search again</Link></li>
				<li><a href="#" onClick={onShowImport}><i className="material-icons">playlist_add</i> Import</a></li>
				<li><a href="#" onClick={onShowChart}><i className="material-icons">show_chart</i> Chart</a></li>
				<li><a href="#" onClick={onShowStream}><i className="material-icons">play_circle_outline</i> Stream</a></li>
			</ul>
		)
	}

	if (showImport === true)  {
		return (
			<div>
				<ImportPlaylistContainer />
				{footerElements()}
			</div>
		)
	}
	else if (showStream === true) {
		return (
			<div>
				<StreamPlaylistContainer />
				{footerElements()}
			</div>
		)
	}
	else if (showChart === true) {
		return (
			<div>
				<ChartPlaylistContainer formData={formData} />
				{footerElements()}
			</div>
		)
	}
	else {
		return (
			<div>
				{footerElements()}
			</div>
		)
	}
}
export default ResultsFooter;

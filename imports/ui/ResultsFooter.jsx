import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import ImportPlaylistContainer from '../containers/ImportPlaylistContainer';
import StreamPlaylistContainer from '../containers/StreamPlaylistContainer';

const ResultsFooter = ({onShowImport, showImport, showStream, onShowStream}) => {
	if (showImport === true)  {
		return (
			<div>
				<ImportPlaylistContainer />
				<ul className="results-footer">
					<li><Link to="/quick"><i className="material-icons">search</i> Search again</Link></li>
					<li><a href="#" onClick={onShowImport}><i className="material-icons">playlist_add</i> Import</a></li>
					<li><a href="#" onClick={onShowStream}><i className="material-icons">play_circle_outline</i> Stream</a></li>
				</ul>
			</div>
		)
	}
	else if (showStream === true) {
		return (
			<div>
				<StreamPlaylistContainer />
				<ul className="results-footer">
					<li><Link to="/quick"><i className="material-icons">search</i> Search again</Link></li>
					<li><a href="#" onClick={onShowImport}><i className="material-icons">playlist_add</i> Import</a></li>
					<li><a href="#" onClick={onShowStream}><i className="material-icons">play_circle_outline</i> Stream</a></li>
				</ul>
			</div>
		)	
	}
	else {
		return (
				<ul className="results-footer">
					<li><Link to="/quick"><i className="material-icons">search</i> Search again</Link></li>
					<li><a href="#" onClick={onShowImport}><i className="material-icons">playlist_add</i> Import</a></li>
					<li><a href="#" onClick={onShowStream}><i className="material-icons">play_circle_outline</i> Stream</a></li>
				</ul>

		)
	}
}
export default ResultsFooter;
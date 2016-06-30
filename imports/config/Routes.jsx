import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../ui/App.jsx';
import HomeContainer from '../containers/HomeContainer.jsx';
import CreatePlaylistContainer from '../containers/CreatePlaylistContainer.jsx';
import PlaylistResultsContainer from '../containers/PlaylistResultsContainer.jsx';

export default (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={HomeContainer} />
			<Route path='quick' component={CreatePlaylistContainer} />
			<Route path='quick/results' component={PlaylistResultsContainer} />
		</Route>
	</Router>
);
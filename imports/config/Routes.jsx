import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../ui/App.jsx';
import Home from '../ui/Home.jsx';
import CreatePlaylistContainer from '../containers/CreatePlaylistContainer.jsx';
import PlaylistResultsContainer from '../containers/PlaylistResultsContainer.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
  	<Route path='/' component={App}>
  		<IndexRoute component={Home} />
  		<Route path='quick' component={CreatePlaylistContainer} />
  		<Route path='quick/results' component={PlaylistResultsContainer} />
		</Route>
  </Router>
 );
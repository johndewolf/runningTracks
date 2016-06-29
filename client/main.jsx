import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'
import { Meteor } from 'meteor/meteor';
import store from '../imports/store'
import Router from '../imports/config/Routes.jsx'; 
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
	ReactDOM.render(
		<Provider store={store}>{Router}</Provider>,
		document.getElementById('render-target')
	)
});
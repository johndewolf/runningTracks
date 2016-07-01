import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'
import { Meteor } from 'meteor/meteor';
import store from '../imports/store';
import { userProfileSuccess } from '../imports/actions/user-actions';
import Router from '../imports/config/Routes.jsx'; 
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
	Meteor.call('checkAccessToken', function(error, result) {
    if (result && result !== false) {
        store.dispatch(userProfileSuccess(result.id))
      }
  });
	ReactDOM.render(
		<Provider store={store}>{Router}</Provider>,
		document.getElementById('render-target')
	)
});
import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import store from '../store';
import { connect } from 'react-redux';
import { userProfileSuccess } from '../actions/user-actions';
import Home from '../ui/Home.jsx';

class HomeContainer extends Component {

  // componentWillMount() {
  //   Meteor.call('checkAccessToken', function(error, result) {
  //     if (result && result !== false) {
  //         store.dispatch(userProfileSuccess(result.id))
  //       }
  //   });
  // }

  handleSpotifyLogin() {
    var options = {
      showDialog: true,
      requestPermissions: ['user-read-email', 'playlist-modify-public', 'playlist-modify-private']
    };
    Meteor.loginWithSpotify(options, function(err, result) {
      if (err) {
        console.log(err);
      } else {
	      Meteor.call('checkAccessToken', function(error, result) {
	      	if (result && result !== false) {
	          store.dispatch(userProfileSuccess(result.id))
	        }
		      else {
		      	console.log(error);
		      }
	    	});
      }
    });
  }
  render() {
    return (
    	<Home onSpotifyLogin={this.handleSpotifyLogin} username={this.props.username} loggedIn={this.props.loggedIn} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    loggedIn: store.userReducer.loggedIn,
    username: store.userReducer.username.userProfile
  };
};
export default connect(mapStateToProps)(HomeContainer);
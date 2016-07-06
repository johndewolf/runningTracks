import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { browserHistory } from 'react-router';
import { userLogout } from '../actions/user-actions';
import NavBar from '../ui/NavBar.jsx';
class NavBarContainer extends Component {
	handleLogOut(e) {
		e.preventDefault();
		var app = this;
		Meteor.logout(function(e) {
			if(e) {
				console.log(e);
			} else {
				browserHistory.push('/');
				store.dispatch(userLogout(false));

			}
		});
	}
  render() {
    return (
    	<NavBar loggedIn={this.props.loggedIn}
    					username={this.props.username}
    					onLogout={this.handleLogOut.bind(this)} />
    );
  }
}
const mapStateToProps = function(store) {
  return {
    loggedIn: store.userReducer.loggedIn,
    username: store.userReducer.username.userProfile
  };
};
export default connect(mapStateToProps)(NavBarContainer);

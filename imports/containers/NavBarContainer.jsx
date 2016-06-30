import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavBar from '../ui/NavBar.jsx';
class NavBarContainer extends Component {

  render() {
    return (
    	<NavBar loggedIn={this.props.loggedIn} username={this.props.username} />
    );
  }
}
const mapStateToProps = function(store) {
  return {
    loggedIn: store.loggedIn,
    username: store.userReducer.username.userProfile
  };
};
export default connect(mapStateToProps)(NavBarContainer);

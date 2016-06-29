import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavBar from '../ui/NavBar.jsx';
class NavBarContainer extends Component {

  render() {
    return (
    	<NavBar userprofile={this.props.userprofile} />
    );
  }
}
const mapStateToProps = function(store) {
  return {
    userprofile: store.UserState.userprofile
  };
};
export default NavBarContainer;
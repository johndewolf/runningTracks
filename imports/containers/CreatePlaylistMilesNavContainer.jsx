import React, { Component, PropTypes } from 'react'
import CreatePlaylistMilesNav from '../ui/CreatePlaylistMilesNav.jsx'
import { updateActiveMile } from '../actions/user-actions'
import store from '../store'
import { connect } from 'react-redux'

class CreatePlaylistMilesNavContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    	<CreatePlaylistMilesNav />
    );
  }
}

export default CreatePlaylistMilesNavContainer;

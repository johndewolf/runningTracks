import React, { Component, PropTypes } from 'react'
import CreatePlaylistMilesNav from '../ui/CreatePlaylistMilesNav.jsx'
import { updateActiveMile } from '../actions/user-actions'
import store from '../store'

class CreatePlaylistMilesNavContainer extends Component {
  componentDidMount() {
    console.log('mounting')
  }
  componentWillReceiveProps() {
    console.log('mounting')
  }

  handleMileClick(value) {
    let mile = parseInt(value.target.dataset.mile)
    store.dispatch(updateActiveMile(mile));

  }
  render() {
    return (
    	<CreatePlaylistMilesNav
        activeMile={this.props.activeMile}
        formData={this.props.formData}
        onMileClick={this.handleMileClick} />
    );
  }
}

export default CreatePlaylistMilesNavContainer;

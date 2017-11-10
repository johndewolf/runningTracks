import React, { Component } from 'react';
import store from '../store';
import { addFieldGroup, updateActiveMile, resetFields, displayFlashBanner } from '../actions/user-actions';
import { connect } from 'react-redux';
import CreatePlaylist from '../ui/CreatePlaylist.jsx';
import Link from 'react-router'
class CreatePlaylistContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: ""
    }
  }
  handlePlaylistSubmit(e) {
    e.preventDefault();

    let noGenre = store.getState().formReducer.filter(function(group, i) {
      return group.genre.length < 1 === true
    });
    let loggedIn = store.getState().userReducer.loggedIn;
    if (noGenre.length === 0 && loggedIn === true) {
      this.context.router.push({
        pathname: '/quick/results'
      })
    }
    else if (store.getState().userReducer.loggedIn === false) {
      store.dispatch(displayFlashBanner(true))
      this.setState({
        hasError: "You must authorize your account to generate. Return to the homepage."
      })
    }
    else {
      let miles = noGenre.map(group => group.mile);
      store.dispatch(displayFlashBanner(true))
      this.setState({
        hasError: "The following mile(s) require a genre: " + miles.join(',')
      })
    }

  }

  handleAddFieldGroup(e) {
    var newMile = Object.keys(store.getState().formReducer).length + 1;
    store.dispatch(addFieldGroup(newMile));
    store.dispatch(updateActiveMile(newMile));
  }

  render() {
    return (
      <div>
        <CreatePlaylist
        onPlaylistSubmit={this.handlePlaylistSubmit.bind(this)}
        onAddFieldGroup={this.handleAddFieldGroup.bind(this)}
        activeMile={this.props.activeMile}
        hasError={this.state.hasError}
        displayFlashBanner={this.props.displayFlashBanner}
        formData={this.props.formData} />
      </div>
    )
  }
}
const mapStateToProps = function(store) {
  return {
    activeMile: store.formBuilderReducer.activeMile,
    displayFlashBanner: store.userReducer.displayFlashBanner,
    formData: store.formReducer
  };
};

CreatePlaylistContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps)(CreatePlaylistContainer);

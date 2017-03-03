import React, { Component } from 'react';
import store from '../store';
import { addFieldGroup } from '../actions/user-actions';
import { updateActiveMile } from '../actions/user-actions';
import { resetFields } from '../actions/user-actions';
import { connect } from 'react-redux';
import CreatePlaylist from '../ui/CreatePlaylist.jsx';
class CreatePlaylistContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: ""
    }
  }
  handlePlaylistSubmit(e) {
    e.preventDefault();

    let noGenre = this.props.formGroups.filter(function(group, i) {
      return group.genre.length < 1 === true
    });
    if (noGenre.length === 0) {
      this.context.router.push({
        pathname: '/quick/results'
      })
    }
    else {
      let miles = noGenre.map(group => group.mile);
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
        formGroups={this.props.formGroups}
        activeMile={this.props.activeMile}
        hasError={this.state.hasError}/>
      </div>
    )
  }
}
const mapStateToProps = function(store) {
  return {
    formGroups: store.formReducer,
    activeMile: store.formBuilderReducer.activeMile
  };
};

CreatePlaylistContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps)(CreatePlaylistContainer);

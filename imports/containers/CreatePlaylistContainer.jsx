import React, { Component } from 'react';
import store from '../store';
import { addFieldGroup } from '../actions/user-actions';
import { resetFields } from '../actions/user-actions';
import { connect } from 'react-redux';
import CreatePlaylist from '../ui/CreatePlaylist.jsx';
class CreatePlaylistContainer extends Component {
  //Next steps: move the state for these fields into redux store, remove the constructor, have the HOC pull state from redux store and update state
  componentWillMount() {
    store.dispatch(resetFields());
  }
  handlePlaylistSubmit(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/quick/results'
    })
  }

  handleAddFieldGroup(e) {
    var newMile = Object.keys(store.getState().formReducer).length + 1;
    store.dispatch(addFieldGroup(newMile));
  }
  
  render() {
    return (
      <div>
        <CreatePlaylist
        onPlaylistSubmit={this.handlePlaylistSubmit.bind(this)}
        onAddFieldGroup={this.handleAddFieldGroup.bind(this)}
        formGroups={this.props.formGroups} />

      </div>
    )
  }
}
const mapStateToProps = function(store) {
  return {
    formGroups: store.formReducer
  };
};

CreatePlaylistContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps)(CreatePlaylistContainer);
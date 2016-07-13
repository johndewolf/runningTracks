import React, { Component } from 'react';
import CreatePlaylist from '../ui/CreatePlaylist.jsx';
class CreatePlaylistContainer extends Component {
  //Next steps: move the state for these fields into redux store, remove the constructor, have the HOC pull state from redux store and update state

  handlePlaylistSubmit(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/quick/results'
    })
  }
  
  render() {
    return (
      <div>
        <CreatePlaylist
        onPlaylistSubmit={this.handlePlaylistSubmit.bind(this)} />
      </div>
    )
  }
}

CreatePlaylistContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default CreatePlaylistContainer;
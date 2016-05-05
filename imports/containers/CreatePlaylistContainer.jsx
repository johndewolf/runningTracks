import React, { Component } from 'react';

import CreatePlaylist from '../ui/CreatePlaylist.jsx';
class CreatePlaylistContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tempo: "",
      time: "",
      genre: ""
    }
  }

  handleTempoUpdate(e) {
    this.setState({
      tempo: e.target.value
    });
  }
  handleGenreUpdate(e) {
    this.setState({
      genre: e.target.value
    });
  }
  handleTimeUpdate(e) {
    this.setState({
      time: e.target.value
    });
  }
  handlePlaylistSubmit(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/quick/results',
      state: {
        tempo: this.state.tempo,
        time: this.state.time,
        genre: this.state.genre
      }
    })
  }
  render() {
    return (
      <CreatePlaylist
        onPlaylistSubmit={this.handlePlaylistSubmit.bind(this)}
        onUpdateTempo={this.handleTempoUpdate.bind(this)}
        onUpdateGenre={this.handleGenreUpdate.bind(this)}
        onUpdateTime={this.handleTimeUpdate.bind(this)}
        tempo={this.state.tempo}
        avgPace={this.state.avgPace}
        time={this.state.time}
        genre={this.state.genre} />
    )
  }
}

CreatePlaylistContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default CreatePlaylistContainer;
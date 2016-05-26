import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PlaylistResults from '../ui/PlaylistResults.jsx';

class PlaylistResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spotifyData: "",
      tempo: "",
      time: "",
      genre: "",
      isLoading: true,
      showImport: false
    };
  }

  handleImportClick() {
    var app = this;
    app.setState({
      showImport: true
    })
  }

  componentDidMount() {
    var app = this;

    Meteor.call('getSpotifyTracks', app.props.location.state.genre, app.props.location.state.tempo, app.props.location.state.time, function(error, result) {
      if (result) {
          app.setState({
            spotifyData: result,
            tempo: app.props.location.state.tempo,
            time: app.props.location.state.time,
            genre: app.props.location.state.genre,
            isLoading: false
          })
        }
        else {
          app.setState({
            spotifyData: "Please login re-apply",
            isLoading: false
          })
        }
      });
  }

  render() {
  return (
      <PlaylistResults
        isLoading={this.state.isLoading} 
        spotifyData={this.state.spotifyData}
        tempo={this.state.tempo}
        time={this.state.time}
        genre={this.state.genre}
        showImport={this.state.showImport}
        onImportClick={this.handleImportClick.bind(this)} />
    )
  }
}

export default PlaylistResultsContainer;
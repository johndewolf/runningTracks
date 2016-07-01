import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { addTracks, getTracks } from '../actions/user-actions';
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

  componentWillMount() {
    var app = this;
    Meteor.call('getSpotifyTracks', app.props.location.state.genre, app.props.location.state.tempo, app.props.location.state.time, function(error, result) {

      if (result) {
          store.dispatch(addTracks(result))
          app.setState({
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
        spotifyData={this.props.spotifyData}
        tempo={this.state.tempo}
        time={this.state.time}
        genre={this.state.genre}
        showImport={this.state.showImport}
        onImportClick={this.handleImportClick.bind(this)} />
    )
  }
}

const mapStateToProps = function(store) {
  return {
    spotifyData: store.playlistReducer.spotifyData
  };
};

export default connect(mapStateToProps)(PlaylistResultsContainer);
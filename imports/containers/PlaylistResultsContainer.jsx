import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { addTracks, getTracks } from '../actions/user-actions';
import PlaylistResults from '../ui/PlaylistResults.jsx';

class PlaylistResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    if (store.getState().userReducer.loggedIn === false) {
      browserHistory.push('/');
    } else {
      var currentState = store.getState().formReducer[1]
      Meteor.call('getSpotifyTracks',
        currentState.genre,
        currentState.tempo,
        currentState.time,
        function(error, result) {

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
  }

  render() {
  return (
      <PlaylistResults
        isLoading={this.state.isLoading} 
        spotifyData={this.props.spotifyData}
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
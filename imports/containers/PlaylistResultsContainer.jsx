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
      errors: []
    };
  }

  componentWillMount() {
    var app = this;
    if (store.getState().userReducer.loggedIn === false) {
      browserHistory.push('/');
    } else {
      var formData = store.getState().formReducer;

      Meteor.call('getSpotifyTracks',
        formData,
        function(error, result) {

        if (result) {
          if (result[0] === 'error') {
            app.setState({
              spotifyData: "ERRORRRR",
              isLoading: false
            })
          }
          else {
            store.dispatch(addTracks(result.tracks));
            app.setState({
              isLoading: false
            });
            if (result.errors.length > 0) {
              app.setState({
                errors: result.errors
              })
            }
          }
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
        errors={this.state.errors}
        spotifyData={this.props.spotifyData} />
    )
  }
}

const mapStateToProps = function(store) {
  return {
    spotifyData: store.playlistReducer.spotifyData
  };
};

export default connect(mapStateToProps)(PlaylistResultsContainer);

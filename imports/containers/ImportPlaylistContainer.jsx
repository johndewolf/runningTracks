import React, { Component, PropTypes } from 'react';
import ImportPlaylist from '../ui/ImportPlaylist.jsx';
import store from '../store';
import { connect } from 'react-redux';
class ImportPlaylistContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: "",
      playlistName: "",
      playlistSubmitted: false,
      returnData: ""
    }
  }

  handleNameUpdate(e) {
  	this.setState({
  		playlistName: e.target.value
  	})
  }

  handleImportPlaylist(e) {
  	e.preventDefault();
    var app = this;
    Meteor.call('createPlaylist', app.state.playlistName, app.state.tracks, function(error, result) {
      if (result) {
        app.setState({
          returnData: result,
          playlistSubmitted: true
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
    	<ImportPlaylist 
    	spotifyData={this.props.spotifyData}
    	playlistName={this.state.playlistName}
    	onNameUpdate={this.handleNameUpdate.bind(this)}
      returnData={this.state.returnData}
    	onImportPlaylist={this.handleImportPlaylist.bind(this)}
    	playlistSubmitted={this.state.playlistSubmitted}  />
    );
  }
}
const mapStateToProps = function(store) {
  return {
    spotifyData: store.playlistReducer.spotifyData
  };
};

export default connect(mapStateToProps)(ImportPlaylistContainer);
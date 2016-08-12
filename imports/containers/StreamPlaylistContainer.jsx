import React, { Component, PropTypes } from 'react';
import StreamPlaylist from '../ui/StreamPlaylist.jsx';
import store from '../store';
import { connect } from 'react-redux';
class StreamPlaylistContainer extends Component {

  render() {
    return (
    	<StreamPlaylist 
    	spotifyData={this.props.spotifyData}  />
    );
  }
}
const mapStateToProps = function(store) {
  return {
    spotifyData: store.playlistReducer.spotifyData
  };
};

export default connect(mapStateToProps)(StreamPlaylistContainer);
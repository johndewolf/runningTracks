import React, { Component, PropTypes } from 'react';
import ChartPlaylist from '../ui/ChartPlaylist.jsx';
import store from '../store';
import { connect } from 'react-redux';
class ChartPlaylistContainer extends Component {

  render() {
    return (
    	<ChartPlaylist
    	spotifyData={this.props.spotifyData}
      formData={this.props.formData}  />
    );
  }
}
const mapStateToProps = function(store) {
  return {
    formData: store.formReducer,
    spotifyData: store.playlistReducer.spotifyData
  };
};

export default connect(mapStateToProps)(ChartPlaylistContainer);

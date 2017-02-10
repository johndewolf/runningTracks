import React, { Component, PropTypes } from 'react';
import ChartPlaylist from '../ui/ChartPlaylist.jsx';
import store from '../store';
import { connect } from 'react-redux';
class ChartPlaylistContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: []
    };
  }

  componentWillMount() {
    this.setState({
      formData: store.getState().formReducer
    })
  }
  render() {
    return (
    	<ChartPlaylist
    	spotifyData={this.props.spotifyData}
      formData={this.state.formData}  />
    );
  }
}
const mapStateToProps = function(store) {
  return {
    spotifyData: store.playlistReducer.spotifyData
  };
};

export default connect(mapStateToProps)(ChartPlaylistContainer);

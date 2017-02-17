import React, { Component, PropTypes } from 'react';
import ChartPlaylist from '../ui/ChartPlaylist.jsx';
import store from '../store';
import { connect } from 'react-redux';
class ChartPlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      message: null
    };
  }

  handleRememberValue(value) {
    var genre = this.props.formData[value.x - 1].genre;

    if (genre) {
      this.setState({
        value: value,
        message: "Genre: " + genre,
      })
    }
  }
  handleForgetValue(value) {
    this.setState({
      value: null,
      message: null
    })
  }

  render() {
    return (
    	<ChartPlaylist
    	spotifyData={this.props.spotifyData}
      formData={this.props.formData}
      onRememberValue={this.handleRememberValue.bind(this)}
      onForgetValue={this.handleForgetValue.bind(this)}
      value={this.state.value}
      message={this.state.message} />
    );
  }
}
const mapStateToProps = function(store) {
  return {
    formData: store.formReducer,
    spotifyData: store.playlistReducer.spotifyData,

  };
};

export default connect(mapStateToProps)(ChartPlaylistContainer);

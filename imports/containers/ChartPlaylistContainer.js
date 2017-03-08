import React, { Component, PropTypes } from 'react';
import ChartPlaylist from '../ui/ChartPlaylist.jsx';
import { updateActiveMile } from '../actions/user-actions';
import store from '../store';
import { connect } from 'react-redux';
class ChartPlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      message: null,
      showTempo: true
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
  handleChartToggle() {
    this.setState({
      showTempo: !this.state.showTempo
    })
  }
  handleValueClick(value) {
    store.dispatch(updateActiveMile(value.x));
  }
  render() {
    return (
    	<ChartPlaylist
    	spotifyData={this.props.spotifyData}
      formData={this.props.formData}
      onRememberValue={this.handleRememberValue.bind(this)}
      onForgetValue={this.handleForgetValue.bind(this)}
      onValueClick={this.handleValueClick.bind(this)}
      onChartToggle={this.handleChartToggle.bind(this)}
      value={this.state.value}
      showTempo={this.state.showTempo}
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

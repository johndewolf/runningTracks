import React, { Component, PropTypes } from 'react';
import ImportPlaylist from '../ui/ImportPlaylist.jsx';
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

  componentDidMount() {
  	this.setState({
  		tracks: this.props.spotifyData
  	})
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
  	console.log('import action goes here')
  }
  render() {
    return (
    	<ImportPlaylist 
    	tracks={this.state.tracks}
    	playlistName={this.state.playlistName}
    	onNameUpdate={this.handleNameUpdate.bind(this)}
      returnData={this.state.returnData}
    	onImportPlaylist={this.handleImportPlaylist.bind(this)}
    	playlistSubmitted={this.state.playlistSubmitted}  />
    );
  }
}
export default ImportPlaylistContainer;
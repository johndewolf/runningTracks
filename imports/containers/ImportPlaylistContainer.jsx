import React, { Component, PropTypes } from 'react';
import ImportPlaylist from '../ui/ImportPlaylist.jsx';
class ImportPlaylistContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: "",
      playlistName: "",
      playlistSubmitted: false,
      returnData: "",
      showImport: false
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
  handleShowImport() {
    this.setState({
      showImport: true
    })
  }
  handleCloseImport() {
    this.setState({
      showImport: false
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
    	tracks={this.state.tracks}
    	playlistName={this.state.playlistName}
    	onNameUpdate={this.handleNameUpdate.bind(this)}
      returnData={this.state.returnData}
    	onImportPlaylist={this.handleImportPlaylist.bind(this)}
      onShowImport={this.handleShowImport.bind(this)}
      onCloseImport={this.handleCloseImport.bind(this)}
      showImport={this.state.showImport}
    	playlistSubmitted={this.state.playlistSubmitted}  />
    );
  }
}
export default ImportPlaylistContainer;
import React, { Component, PropTypes } from 'react';
import ImportPlaylist from '../ui/ImportPlaylist.jsx';
class ImportPlaylistContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: "",
      playlistName: "",
      playlistSubmitted: false
    }
  }

  componentDidMount() {
  	this.setState({
  		tracks: this.props.spotifyData.map(function(track,i) {
				return <li key={i}><b>{track.artists[0].name}</b> - {track.name}</li>
			})
  	})
  }
  handleNameUpdate(e) {
  	this.setState({
  		playlistName: e.target.value
  	})
  }
  handleImportPlaylist(e) {
  	e.preventDefault();
  	this.setState({
  		playlistSubmitted: true
  	})
  	console.log('import action goes here')
  }
  render() {
    return (
    	<ImportPlaylist 
    	tracks={this.state.tracks}
    	playlistName={this.state.playlistName}
    	onNameUpdate={this.handleNameUpdate.bind(this)}
    	onImportPlaylist={this.handleImportPlaylist.bind(this)}
    	playlistSubmitted={this.state.playlistSubmitted}  />
    );
  }
}
export default ImportPlaylistContainer;
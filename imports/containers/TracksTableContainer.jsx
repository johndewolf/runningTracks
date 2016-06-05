import React, { Component } from 'react';

import TracksTable from '../ui/TracksTable.jsx';
class TracksTableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
			spotifyData: []
    }
  }
  componentDidMount() {
  	this.setState({
  		spotifyData: this.props.spotifyData
  	})
  }
  handleDeleteTrack(e) {
  	e.preventDefault();
  	var spotifyId = e.target.getAttribute('data-trackid');
  	var newTrackList = this.state.spotifyData.filter(function(track) {
  		return track.id !== spotifyId })
  	this.setState({
  		spotifyData: newTrackList
  	});

  }

  render() {
    return (
    	<TracksTable 
    		spotifyData={this.state.spotifyData}
    		onDeleteTrack={this.handleDeleteTrack.bind(this)} />
    )
  }
}

export default TracksTableContainer;
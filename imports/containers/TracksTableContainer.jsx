import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { removeTrack, getTracks } from '../actions/user-actions';
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
  	store.dispatch(removeTrack(spotifyId))
  }

  render() {
    return (
    	<TracksTable 
    		spotifyData={this.props.spotifyData}
    		onDeleteTrack={this.handleDeleteTrack.bind(this)} />
    )
  }
}

const mapStateToProps = function(store) {
  return {
    spotifyData: store.playlistReducer.spotifyData
  };
};

export default connect(mapStateToProps)(TracksTableContainer);
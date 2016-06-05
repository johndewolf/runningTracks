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

  render() {
    return (
    	<TracksTable 
    		spotifyData={this.state.spotifyData} />
    )
  }
}

export default TracksTableContainer;
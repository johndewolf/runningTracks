import React, { Component, PropTypes } from 'react';
import NavBar from '../ui/NavBar.jsx';
class NavBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    }
  }

  componentDidMount() {
  	this.setState({
  		username: Meteor.user().services.spotify.id
  	})
  }

  render() {
    return (
    	<NavBar username={this.state.user} />
    );
  }
}
export default NavBarContainer;
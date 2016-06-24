import React, { Component, PropTypes } from 'react';
import NavBarContainer from '../containers/NavBarContainer';
// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
    	<div>
    		<NavBarContainer />
      	{this.props.children}
      </div>
    );
  }
}

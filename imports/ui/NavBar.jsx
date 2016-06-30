
import React, { Component, PropTypes } from 'react';

const NavBar = ({loggedIn, username}) => {
	return (
		<nav className="topNav flexcontainer-row">
			<a href="/" className="flex-left">rT</a>
			<div className="flex-right">{username}</div>
		</nav>
	)
}

export default NavBar;

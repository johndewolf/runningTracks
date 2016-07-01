import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

const NavBar = ({loggedIn, username}) => {
	return (
		<nav className="topNav flexcontainer-row">
			<Link to="/" className="flex-left">rT</Link>
			<div className="flex-right">{username}</div>
		</nav>
	)
}

export default NavBar;

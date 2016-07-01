import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

const NavBar = ({loggedIn, username}) => {
	return (
		<nav className="topNav row end-xs">
			<div className="col-sm-6">
				<Link to="/" >rT</Link>
			</div>
			<div className="col-sm-6">{username}</div>
		</nav>
	)
}

export default NavBar;

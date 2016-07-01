import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

const NavBar = ({loggedIn, username}) => {
	return (

		<nav className="topNav flexcontainer-row">
			<div className="flex-left">
				<Link to="/">rT</Link>
			</div>
			<div className="flex-right">
				<i className="material-icons account-icon">account_circle</i>
				<span className="username">{username}</span>
			</div>
		</nav>
	)
}

export default NavBar;

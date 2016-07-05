import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const NavBar = ({loggedIn, username, onLogout}) => {
	function toggleLogout(e) {
		e.preventDefault();
		var dropDown = document.getElementById('profile-dropdown');
		if (dropDown.style.display === 'none') {
			dropDown.style.display = 'inline-block'
			document.getElementById('toggle-icon').classList.add('active')
		} else {
			dropDown.style.display = 'none'
			document.getElementById('toggle-icon').classList.remove('active')
		}
	}
	return (

		<nav className="topNav flexcontainer-row">
			<div className="flex-left">
				<Link to="/">rT</Link>
			</div>

			{loggedIn === true ? 
			<div className="flex-right">
				<ul className="nav-links">
					<li><a href="#" className="username" id='profile-toggle' onClick={toggleLogout}><i className="material-icons account-icon">account_circle</i>{username} <i className="material-icons" id="toggle-icon">arrow_drop_down</i></a></li>
					<li id="profile-dropdown" onClick={onLogout} style={{display: 'none'}}><a href="#">Logout</a></li>
				</ul>
			</div>
			: null}
		</nav>
	)
}

export default NavBar;

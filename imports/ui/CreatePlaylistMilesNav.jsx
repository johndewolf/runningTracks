import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'

const CreatePlaylistMilesNav = (props) => {
	let miles = props.formData.map(function(i) {
		let mileClass = i.mile === props.activeMile ? "mile-button active" : "mile-button"
		return (<div key={i.mile} className={mileClass} data-mile={i.mile} onClick={props.onMileClick}>{i.mile}</div>)
	})

	return (
    <div className="row margin-top__auto">
			<div className="col-sm-12 text-center">
	    	<div className="mile-nav">{miles}</div>
			</div>
    </div>
	)
}

export default CreatePlaylistMilesNav;

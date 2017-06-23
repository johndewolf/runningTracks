import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'
const FlashBanner = ({message, onRemoveBanner, displayError}) => {

	return (

    <div className="container container-narrow flash-banner red-border" id="warning-banner">
			<div className="row">
        <div className="col-xs-12">{message}</div>
        <i className="material-icons" onClick={onRemoveBanner}>close</i>
      </div>
    </div>

	)
}

export default FlashBanner;

import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'
const FlashBanner = ({message, onRemoveBanner}) => {

	return (
    <div className="container container-narrow flash-banner red-border" id="warning-banner">
      <div className="row">
        <div className="col-xs-6">{message}</div>
        <div className="col-xs-6 text-right"><i className="material-icons" onClick={onRemoveBanner}>close</i></div>
      </div>
    </div>
	)
}

export default FlashBanner;

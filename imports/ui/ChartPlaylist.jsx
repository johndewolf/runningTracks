import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries} from 'react-vis';

const ChartPlaylist = ({spotifyData, formData}) => {

  var formattedData = []
  formData.forEach(function(group, i) {
    formattedData.push({x: group.mile, y: group.tempo});
  })
	return (
		<div>
      <XYPlot
        width={400}
        height={400}
        yDomain={[0,100]}
        >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Mile" />
        <YAxis title="Tempo" />
        <LineSeries
          className="first-series"
          data={formattedData}
          curve={'curveMonotoneX'} />
      </XYPlot>
		</div>
	)
}

export default ChartPlaylist;

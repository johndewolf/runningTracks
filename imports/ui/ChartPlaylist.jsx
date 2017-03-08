import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  Hint,
  MarkSeries,
  LineSeries} from 'react-vis';

const ChartPlaylist = ({spotifyData, formData, onRememberValue, onForgetValue, onValueClick, value, message, onChartToggle, showTempo}) => {

  var tempoData = []
  var timeData = []
  formData.forEach(group => {
    tempoData.push({x: group.mile, y: group.tempo});
    timeData.push({x: group.mile, y: group.time / 60000});
  })

	return (
		<div className="text-center">
      <XYPlot
        width={400}
        height={400}
        yDomain={showTempo ? [0,100] : null}
        >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Mile" />
        <YAxis title={showTempo ? "Tempo" : "Time"} />
        <LineSeries
          className="first-series"
          data={showTempo ? tempoData : timeData}
          animation={true}
          curve={'curveMonotoneX'} />
        <MarkSeries
          onValueMouseOver={onRememberValue}
          onValueMouseOut={onForgetValue}
          onValueClick={onValueClick}
          data={showTempo ? tempoData : timeData} />
          {value ?
          <Hint value={ value } >
            <div style={{background: 'black', padding: 10, margin: 10}}>
              {message}
            </div>
          </Hint> : null}
      </XYPlot>
      <div className="switch" onClick={onChartToggle}>Show {showTempo ? "Time" : "Tempo"}</div>
    </div>

	)
}

export default ChartPlaylist;

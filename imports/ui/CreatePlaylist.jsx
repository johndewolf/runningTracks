import React, { Component, PropTypes } from 'react';
import PlaylistFieldGroupContainer from '../containers/PlaylistFieldGroupContainer';
import {curveCatmullRom} from 'd3-shape';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries} from 'react-vis';
const CreatePlaylist = (props) => {
	var formFields = props.formGroups.map(function(group, i) {
		return (<PlaylistFieldGroupContainer {...props} mile={group.mile} key={i} />);
	})
  var chartData = [];
  props.formGroups.forEach(function(group, i) {
    chartData.push({x: group.mile, y: group.tempo});
  })
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-6">
					<h1>Playlist Details</h1>
					<form onSubmit={props.onPlaylistSubmit}>
						{formFields}

						<div className="addMile" onClick={props.onAddFieldGroup}><i className="material-icons">add_circle_outline</i> <span>Add Mile</span></div>
						<button type='button' type="submit" className='margin-top'>Generate Playlist</button>
					</form>

				</div>
        <div className="col-sm-6">
          <XYPlot
            width={600}
            height={600}
            yDomain={[0,100]}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis title="Mile" />
            <YAxis title="Tempo" />
            <LineSeries
              className="first-series"
              data={chartData}/>
            <LineSeries
              className="second-series"
              data={null}
              yDomain={[0, 100]} />
          </XYPlot>
        </div>
			</div>
		</div>
	)
}
/*
Multiple genres,
genre type ahead,
more search options
energy level range
export playlist to spotify
*/
export default CreatePlaylist

import React, { Component, PropTypes } from 'react';
import PlaylistFieldGroupContainer from '../containers/PlaylistFieldGroupContainer';
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
  var durationData = []
  props.formGroups.forEach(function(group, i) {
    chartData.push({x: group.mile, y: group.tempo});
  })


	return (
		<div className="wrap container bg-white add-mile section-padding">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-6">
					<h1>Build Your Playlist</h1>
					<form onSubmit={props.onPlaylistSubmit} className="build-playlist">
						{formFields}

						<button className="addMile btn-secondary" onClick={props.onAddFieldGroup}><i className="material-icons">add_circle_outline</i> Add Mile</button>
						<button type='button' type="submit" className='margin-top btn-primary'>Generate Playlist</button>
					</form>

				</div>
        <div className="col-sm-6">
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
              data={chartData}
              curve={'curveMonotoneX'} />
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

import React, { Component, PropTypes } from 'react';
import PlaylistFieldGroupContainer from '../containers/PlaylistFieldGroupContainer';
import ChartPlaylistContainer from '../containers/ChartPlaylistContainer';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries} from 'react-vis';
const CreatePlaylist = (props) => {
	return (
		<div className="wrap container bg-white add-mile section-padding">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-6">
					<h1>Build Your Playlist</h1>
					<form onSubmit={props.onPlaylistSubmit} className="build-playlist">
						<PlaylistFieldGroupContainer {...props} mile={props.activeFieldGroup} key={props.activeFieldGroup} />

						<a className="addMile btn btn-secondary" onClick={props.onAddFieldGroup}><i className="material-icons">add_circle_outline</i> Add Mile</a><br />
						<button type='button' type="submit" className='margin-top btn-primary'>Generate Playlist</button>
					</form>

				</div>
        <div className="col-xs-12 col-sm-12 col-md-6">
          <ChartPlaylistContainer />
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

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import PlaylistFieldGroup from '../ui/PlaylistFieldGroup.jsx';
import { updateField } from '../actions/user-actions';

class PlaylistFieldGroupContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      availableGenres: []
    }
  }
  componentDidMount() {
    var app = this;
    Meteor.call('getGenreSeeds', function(error, result) {
      if (result) {
        app.setState({
          availableGenres: result  
        })  
      }
    })
  }
  handleTempoUpdate(e) {
    store.dispatch(updateField({mile: this.props.mile, field: 'tempo',  value: e.target.value}))
  }
  handleGenreUpdate(e) {
    store.dispatch(updateField({mile: this.props.mile, field: 'genre',  value: e.target.value}))
  }
  handleTimeUpdate(e) {
    store.dispatch(updateField({mile: this.props.mile, field: 'time',  value: e.target.value}))
  }
  
  render() {    
    return <PlaylistFieldGroup
        onUpdateTempo={this.handleTempoUpdate.bind(this)}
        onUpdateGenre={this.handleGenreUpdate.bind(this)}
        onUpdateTime={this.handleTimeUpdate.bind(this)}
        availableGenres={this.state.availableGenres}
        time={this.props.time} />
  }
};

const mapStateToProps = function(store, ownProps) {
  console.log(ownProps)
  var currenTime = store.formReducer[ownProps.mile].time
  return {
    time: currenTime
  };
};

// export default connect(mapStateToProps)(PlaylistFieldGroupContainer);
export default PlaylistFieldGroupContainer;
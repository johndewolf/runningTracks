import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import PlaylistFieldGroup from '../ui/PlaylistFieldGroup.jsx';
import { updateField } from '../actions/user-actions';
import { removeFieldGroup } from '../actions/user-actions';
import { addGenres } from '../actions/user-actions';

class PlaylistFieldGroupContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 8,
      seconds: 0
    };
  }
  componentWillMount() {
    Meteor.call('getGenreSeeds', function(error, result) {
      if (result) {
        if (result === 'error') {
          console.log('log in required')
        } else {
          store.dispatch(addGenres(result))
        }

      }
    })
  }
  handleTempoUpdate(e) {
    store.dispatch(updateField({mile: this.props.mile, field: 'tempo',  value: e.target.value}))
  }
  handleGenreUpdate(e) {
    store.dispatch(updateField({mile: this.props.mile, field: 'genre',  value: e.target.value}))
  }
  handleMinutesUpdate(e) {
    var timeInMilli = (e.target.value * 60 * 1000) + (this.state.seconds * 1000);
    this.setState({
      minutes: e.target.value
    })
    store.dispatch(updateField({mile: this.props.mile, field: 'time',  value: timeInMilli}))
  }
  handleSecondsUpdate(e) {
    var timeInMilli = (e.target.value * 1000) + (this.state.minutes * 60 * 1000);
    this.setState({
      seconds: e.target.value
    })
    store.dispatch(updateField({mile: this.props.mile, field: 'time',  value: timeInMilli}))
  }
  handleDeleteFieldGroup() {
    store.dispatch(removeFieldGroup(this.props.mile));
  }

  render() {
    return <PlaylistFieldGroup
        onUpdateTempo={this.handleTempoUpdate.bind(this)}
        onUpdateGenre={this.handleGenreUpdate.bind(this)}
        onUpdateMinutes={this.handleMinutesUpdate.bind(this)}
        onUpdateSeconds={this.handleSecondsUpdate.bind(this)}
        onDeleteFieldGroup={this.handleDeleteFieldGroup.bind(this)}
        availableGenres={this.props.availableGenres}
        mile={this.props.mile}
        fieldGroups={this.props.fieldGroups}
        styles={this.props.styles} />
  }
};

const mapStateToProps = function(store) {
  return {
    fieldGroups: store.formReducer,
    availableGenres: store.formBuilderReducer.genres
  }
};

export default connect(mapStateToProps)(PlaylistFieldGroupContainer);

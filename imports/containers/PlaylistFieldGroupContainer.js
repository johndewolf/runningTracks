import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import PlaylistFieldGroup from '../ui/PlaylistFieldGroup.jsx';
import { updateField } from '../actions/user-actions';
import { removeFieldGroup } from '../actions/user-actions';
import { addGenres } from '../actions/user-actions';

class PlaylistFieldGroupContainer extends Component {
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
  handleTimeUpdate(e) {
    store.dispatch(updateField({mile: this.props.mile, field: 'time',  value: e.target.value}))
  }

  handleDeleteFieldGroup() {
    store.dispatch(removeFieldGroup(this.props.mile));
  }
  
  render() {    
    return <PlaylistFieldGroup
        onUpdateTempo={this.handleTempoUpdate.bind(this)}
        onUpdateGenre={this.handleGenreUpdate.bind(this)}
        onUpdateTime={this.handleTimeUpdate.bind(this)}
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
    availableGenres: store.genres
  }
};

export default connect(mapStateToProps)(PlaylistFieldGroupContainer);

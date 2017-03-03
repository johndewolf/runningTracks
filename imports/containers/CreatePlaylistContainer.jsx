import React, { Component } from 'react';
import store from '../store';
import { addFieldGroup } from '../actions/user-actions';
import { resetFields } from '../actions/user-actions';
import { connect } from 'react-redux';
import CreatePlaylist from '../ui/CreatePlaylist.jsx';
class CreatePlaylistContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFieldGroup: 1
    };
  }
  componentDidMount() {
    store.dispatch(resetFields());
    this.setState({
      activeFieldGroup: 1
    })
  }
  handlePlaylistSubmit(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/quick/results'
    })
  }

  handleAddFieldGroup(e) {
    var newMile = Object.keys(store.getState().formReducer).length + 1;
    this.setState({
      activeFieldGroup: this.state.activeFieldGroup += 1
    })
    store.dispatch(addFieldGroup(newMile));
  }

  render() {
    return (
      <div>
        <CreatePlaylist
        onPlaylistSubmit={this.handlePlaylistSubmit.bind(this)}
        onAddFieldGroup={this.handleAddFieldGroup.bind(this)}
        formGroups={this.props.formGroups}
        activeFieldGroup={this.state.activeFieldGroup}/>
      </div>
    )
  }
}
const mapStateToProps = function(store) {
  return {
    formGroups: store.formReducer
  };
};

CreatePlaylistContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps)(CreatePlaylistContainer);

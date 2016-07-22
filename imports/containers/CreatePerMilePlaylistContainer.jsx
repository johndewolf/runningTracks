import React, { Component } from 'react';
import CreatePlaylistPerMile from '../ui/CreatePlaylistPerMile.jsx';
class CreatePerMilePlaylistContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tempo: "0.1|0.2",
      time: "",
      genre: "",
      miles: 5,
      availableGenres: []
    }
  }
  handleMilesUpdate(e) {
   	console.log(e.target.value)
    this.setState({
      miles: e.target.value
    });
  }
  handleMilesClick(e) {
  	console.log('clicked');
   	document.getElementById('miles-form').remove();
  }

  //Next steps: move the state for these fields into redux store, remove the constructor, have the HOC pull state from redux store and update state

  handlePlaylistSubmit(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/quick/results',
      state: {
        tempo: this.state.tempo,
        time: this.state.time,
        genre: this.state.genre
      }
    })
  }
  
  render() {
    return (
      <div>
        <CreatePlaylistPerMile
        onPlaylistSubmit={this.handlePlaylistSubmit.bind(this)}
        onMilesUpdate={this.handleMilesUpdate.bind(this)}
        onMilesClick={this.handleMilesClick.bind(this)}
        tempo={this.state.tempo}
        time={this.state.time}
        genre={this.state.genre}
        miles={this.state.miles}
        availableGenres={this.state.availableGenres} />
      </div>
    )
  }
}

CreatePerMilePlaylistContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default CreatePerMilePlaylistContainer;
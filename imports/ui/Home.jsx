import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
// App component - represents the whole app
class Home extends Component {
  constructor(props) {
  super(props);
    this.state = {
      loggedIn: false
    };
  }
  componentWillMount() {
    var app = this;
    Meteor.call('checkAccessToken', function(error, result) {
      if (result && result === true) {
          app.setState({
            loggedIn: true
          })
        }
        else {
          app.setState({
            loggedIn: false
          })
        }
      });
  }
  spotifyLogin() {
    var options = {
      showDialog: true,
      requestPermissions: ['user-read-email', 'playlist-modify-public', 'playlist-modify-private']
    };
    Meteor.loginWithSpotify(options, function(err) {
      if (err) {
        console.log(err);
      } else {
        browserHistory.push('/quick');
      }
    });
  }
  render() {
    if (this.state.loggedIn === true) {
      var button = <p><Link to='/quick'>proceed</Link></p>
    } else {
      var button = <button type="button" className="btn btn-large btn-success" onClick={this.spotifyLogin.bind(this)}>Login with Spotify</button>
    }
    return (
      <div className="container">
        <h1>Welcome to runningTracks</h1>
        {button}					
      </div>
    );
  }
}
export default Home;
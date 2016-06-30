import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
const Home = ({onSpotifyLogin, username, loggedIn}) => {
  if (loggedIn === false) {
  var button = <button type="button" className="btn btn-large btn-success" onClick={onSpotifyLogin}>Login with Spotify</button>
  }
  else if (loggedIn === true) {
    var button = <Link to="/quick" className="btn">Proceed</Link>
  }
  
  return (
    <div className="container">
      { username !== "" ? <h1>Welcome Back {username}</h1> : <h1>Welcome to runningTracks</h1> }
      {button}          
    </div>
  );
}


export default Home;
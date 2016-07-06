import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
const Home = ({onSpotifyLogin, username, loggedIn}) => {
  if (loggedIn === false) {
  var button = <button type="button" className="btn margin-bottom margin-top" onClick={onSpotifyLogin}>Login with Spotify</button>
  }
  else if (loggedIn === true) {
    var button = <Link to="/quick" className="btn margin-bottom margin-top">Proceed</Link>
  }
  
  return (
    <div className="container text-center">
    <iframe src="https://embed.spotify.com/?uri=spotify:track:5JunxkcjfCYcY7xJ29tLai" frameborder="0" allowtransparency="true"></iframe>
      { loggedIn === true ? <h1>Welcome Back {username}</h1> : <h1>Welcome to runningTracks</h1> }
      <p>Click below to authorize your Spotify account</p>
      {button}
    </div>
  );
}


export default Home;
import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
const Home = ({onSpotifyLogin, username, loggedIn}) => {
  if (loggedIn === false) {
  var button = <button type="button" className="btn btn-primary centered margin-bottom margin-top" onClick={onSpotifyLogin}>Login with Spotify</button>
  }
  else if (loggedIn === true) {
    var button =
        <Link to="/quick" className="btn btn-primary margin-bottom margin-top">Create Playlist</Link>
  }

  return (
    <div className="container container-narrow">
      { loggedIn === true ? <h1 className="text-center">Welcome Back {username}</h1> : <h1 className="text-center">Welcome to runningTracks</h1> }
      <p>How it works: First you authorize your Spotify account. Then fill out the genre, tempo, and goal time for each mile that you plan to run.</p>
      <p>runningTracks' algorithm will then generate the perfect playlist for your run. From there you can import it into your Spotify account or stream it right from the app.</p>
      <p>Enjoy!</p>
      <p className="text-center">{button}</p>
    </div>
  );
}


export default Home;

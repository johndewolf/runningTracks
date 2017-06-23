import React, { Component, PropTypes } from 'react';
import FlashBanner from '../ui/FlashBanner.jsx';
import store from '../store';
import { displayFlashBanner } from '../actions/user-actions';
class FlashBannerContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleRemoveBanner(e) {
    // var banner = document.getElementById("warning-banner");
    // banner.classList.add('fade-out');
    // setTimeout(function() {
    //   banner.parentNode.removeChild(banner);
    // }, 500);
    store.dispatch(displayFlashBanner(false))
  }
  render() {
    return (
    	<FlashBanner
    	message={this.props.message}
      displayError={false}
      onRemoveBanner={this.handleRemoveBanner.bind(this)}  />
    );
  }
}

export default FlashBannerContainer;

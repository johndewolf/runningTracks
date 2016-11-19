import React, { Component, PropTypes } from 'react';
import FlashBanner from '../ui/FlashBanner.jsx';

class FlashBannerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    }
  }

  componentDidMount() {
    this.setState({
      message: this.props.message
    })
  }
  handleRemoveBanner(e) {
    var banner = document.getElementById("warning-banner");
    banner.classList.add('fade-out');
    setTimeout(function() {
      banner.parentNode.removeChild(banner);
    }, 500);
  }
  render() {
    return (
    	<FlashBanner
    	message={this.state.message}
      onRemoveBanner={this.handleRemoveBanner.bind(this)}  />
    );
  }
}

export default FlashBannerContainer;

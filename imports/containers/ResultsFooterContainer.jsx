import React, { Component, PropTypes } from 'react';
import ResultsFooter from '../ui/ResultsFooter.jsx';
class ResultsFooterContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showImport: false,
      showStream: false,
    };
  }

  handleShowImport() {
    this.setState({
      showImport: true,
      showStream: false
    })
  }
  handleShowStream() {
    this.setState({
      showImport: false,
      showStream: true
    })
  }
 
 
  render() {
    return (
    	<ResultsFooter
        onShowImport={this.handleShowImport.bind(this)}
        onShowStream={this.handleShowStream.bind(this)}
        showImport={this.state.showImport}
        showStream={this.state.showStream} />
    );
  }
}


export default ResultsFooterContainer;
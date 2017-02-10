import React, { Component, PropTypes } from 'react';
import ResultsFooter from '../ui/ResultsFooter.jsx';
class ResultsFooterContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showImport: false,
      showStream: false,
      showChart: false
    };
  }

  handleShowImport() {
    this.setState({
      showImport: true,
      showStream: false,
      showChart: false
    })
  }
  handleShowStream() {
    this.setState({
      showImport: false,
      showStream: true,
      showChart: false
    })
  }
  handleShowChart() {
    this.setState({
      showImport: false,
      showStream: false,
      showChart: true
    })
  }


  render() {
    return (
    	<ResultsFooter
        onShowImport={this.handleShowImport.bind(this)}
        onShowStream={this.handleShowStream.bind(this)}
        onShowChart={this.handleShowChart.bind(this)}
        showImport={this.state.showImport}
        showChart={this.state.showChart}
        showStream={this.state.showStream} />
    );
  }
}


export default ResultsFooterContainer;

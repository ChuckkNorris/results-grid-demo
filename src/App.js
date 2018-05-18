import React, { Component } from 'react';
import logo from './logo.svg';
import ResultsGrid from './modules/results-grid/results-grid.component';

const getData = (rowCount) => {
  const rows = Array(rowCount).fill().map(() => {
    return ["Jake", "Smitch", "USA"]
  })
  return [
    ...rows
  ];
};

const TEST_DATA = {
  columnNames: [
    "First Name",
    "Last Name",
    "Country"
  ],
  
  data: getData(10000000)
}

class App extends Component {
  state = {
    test: 1
  };

  render() {
    return (
      <div className="App">
        <ResultsGrid
          columnNames={TEST_DATA.columnNames}
          data={TEST_DATA.data}
        />
        <button
          onClick={() => this.setState({test: this.state.test + 1})}
          type='button'>Set test</button>
      </div>
    );
  }
}

export default App;

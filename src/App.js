import React, { Component } from 'react';
import logo from './logo.svg';
import ResultsGrid from './modules/results-grid/results-grid.component';

const TEST_DATA = {
  columnNames: [
    "First Name",
    "Last Name",
    "Country"
  ],
  data: (rowCount) => {
    let rows = [];
    for (let i = 0; i < rowCount; i++) {
      if (i === 100) {
        rows.push(["Amazing", "Last", "Rowq"]);  
      } else
        rows.push(["Jake", "Smitch", "USA"]);
    }
    return [
      ...rows
    ];
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResultsGrid
          columnNames={TEST_DATA.columnNames}
          data={TEST_DATA.data(10000000)}
        />
      </div>
    );
  }
}

export default App;

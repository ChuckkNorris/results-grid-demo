import React from 'react';
import 'react-virtualized/styles.css'
import { Column, Grid } from 'react-virtualized'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import List from 'react-virtualized/dist/commonjs/List'

const columnWidth = 130;

export default class ResultsGrid extends React.Component {

  cellRenderer = ({columnIndex, key, rowIndex, style}) => {
    const {columnNames, data} = this.props;
    const cellData = data[rowIndex][columnIndex];
    const cellValue = columnIndex === 0 ? `${rowIndex+1} ${cellData}` : cellData;
    return (
      <div key={key} style={style}>{cellValue}</div>
    );
  }

  render() {
    const {columnNames, data} = this.props;
    
    return (
      <div>
        <div>
          {columnNames.map((colName, key) => (
            <span key={key} style={{width: columnWidth, height: 30, display: 'inline-block'}}>{colName}</span>
          ))}
        </div>
        <div>
          <AutoSizer disableHeight>
          {({width}) => (
            <Grid
              cellRenderer={this.cellRenderer}
              columnWidth={columnWidth}
              columnCount={columnNames.length}
              height={600}
              noContentRenderer={() => (<div>None</div>)}
              overscanColumnCount={0}
              overscanRowCount={30}
              rowHeight={30}
              rowCount={data.length}
              scrollToColumn={0}
              scrollToRow={0}
              width={800}
            />
          )}
        </AutoSizer>
      </div>
    </div>
    );
  }
}

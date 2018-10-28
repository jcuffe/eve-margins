import React from 'react';
import { Table, Column, AutoSizer } from 'react-virtualized';
import { connect } from 'react-redux';
import { getActiveTypes } from '../../actions/dispatch';

const Results = ({ getActiveTypes, orders, types }) => {
  const rowGetter = ({ index }) => orders[index];
  const orderTypeRenderer = ({ cellData }) => cellData ? "Buy" : "Sell";
  const typeNameRenderer = ({ cellData }) => types[cellData] ? types[cellData].typeName : "???";
  return (
    <div className="market-results">
      <button onClick={getActiveTypes}>Get Active Types in The Forge</button>
      <AutoSizer disableHeight>
        {({width}) => (
          <Table
            ref="Table"
            headerHeight={50}
            height={800}
            noRowsRenderer={() => <div></div>}
            overscanRowCount={10}
            rowHeight={40}
            rowGetter={rowGetter}
            rowCount={orders.length}
            width={width}>
            <Column
              label="Type Name"
              dataKey="type_id"
              cellRenderer={typeNameRenderer}
              width={300}
              flexGrow={1}
            />
            <Column
              label="Order Type"
              dataKey="is_buy_order"
              cellRenderer={orderTypeRenderer}
              width={100}
            />
            <Column
              label="Price"
              dataKey="price"
              width={150}
            />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

const stateToProps = (state) => ({
  orders: [].concat(...Object.values(state.market.orders)),
  types: state.types
});

const dispatchToProps = { getActiveTypes };

export default connect(stateToProps, dispatchToProps)(Results);
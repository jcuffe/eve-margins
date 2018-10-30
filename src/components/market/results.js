import React from 'react';
import { Table, Column, AutoSizer } from 'react-virtualized';
import { connect } from 'react-redux';

const Results = ({ getActiveTypes, orders, types }) => {
  const rowGetter = ({ index }) => orders[index];
  const orderTypeRenderer = ({ cellData }) => cellData ? "Buy" : "Sell";
  const typeNameRenderer = ({ cellData }) => types[cellData] ? types[cellData].typeName : "???";
  return (
    <div className="market-results">
      <AutoSizer>
        {({ height, width }) => (
          <Table
            ref="Table"
            headerHeight={50}
            height={height}
            width={width}
            noRowsRenderer={() => <div></div>}
            overscanRowCount={0}
            rowHeight={40}
            rowGetter={rowGetter}
            rowCount={orders.length}>
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
  types: state.types.all
});


export default connect(stateToProps)(Results);
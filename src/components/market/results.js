import React from 'react';
import { connect } from 'react-redux';
import { getActiveTypes } from '../../actions/dispatch';

const Results = ({ getActiveTypes, orders }) => (
  <div>
    <button onClick={getActiveTypes}>Get Active Types in The Forge</button>
    <table>
      <thead>
        <tr>
          <th>Type ID</th>
          <th>Price</th>
          <th>Buy Order?</th>
          <th>Location ID</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(orders).map(typeOrders => (
          typeOrders.map(order => (
            <tr>
              <td>{order.type_id}</td>
              <td>{order.price}</td>
              <td>{order.is_buy_order ? "Yes" : "No"}</td>
              <td>{order.location_id}</td>
            </tr>
          )) 
        ))}
      </tbody>
    </table>
  </div>
);

const stateToProps = (state) => ({
  orders: state.market.orders
});

const dispatchToProps = { getActiveTypes };

export default connect(stateToProps, dispatchToProps)(Results);
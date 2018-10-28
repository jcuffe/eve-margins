import React from 'react';
import MarketLocations from '../market/locations';
import MarketFilters from '../market/filters';
import MarketTree from '../market/tree';
import MarketResults from '../market/results';
import Characters from './characters';

export default () => (
  <div className="interface">
    <Characters />
    <MarketTree />
    <MarketLocations />
    <MarketFilters />
    <MarketResults />
  </div>
);
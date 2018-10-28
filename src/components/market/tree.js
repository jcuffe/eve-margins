import React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import { connect } from 'react-redux';
import { getTypes, selectType } from '../../actions/dispatch';
import 'react-virtualized/styles.css'

const Type = ({ type, selectType, key, style }) => {
  const onClick = () => selectType(type.typeID);
  return (
    <div {...{ onClick, key, style }} >
      {type.typeName}
    </div>
  );
}; 


const Tree = ({ types, getTypes, selectType }) => {
  const rowRenderer = ({ key, index, style }) => (
    <Type {...{ type: types[index], key, style, selectType }} />
  );
  if (types.length === 0) {
    getTypes();
  }
  return (
    <div className="type-tree">
      <AutoSizer disableHeight>
        {({width}) => (
          <List
            ref="List"
            height={800}
            noRowsRenderer={() => <div></div>}
            overscanRowCount={10}
            rowCount={types.length}
            rowHeight={50}
            rowRenderer={rowRenderer}
            width={width}
          />
        )}
      </AutoSizer>
    </div>
  );
};

const stateToProps = (state) => ({
  types: Object.values(state.types) // Not ideal
});

const dispatchToProps = { getTypes, selectType };

export default connect(stateToProps, dispatchToProps)(Tree);
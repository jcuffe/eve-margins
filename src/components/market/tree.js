import React from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { List, AutoSizer } from 'react-virtualized';
import { connect } from 'react-redux';
import { getTypes, selectType } from '../../actions/dispatch';
import 'react-virtualized/styles.css'

const Type = ({ type, selected, selectType, key, style }) => {
  const onClick = () => selectType(type.typeID);
  const className = classNames({
    "selected": selected
  })
  return (
    <div {...{ className, onClick, key, style }} >
      {type.typeName}
    </div>
  );
}; 


const Tree = ({ types, selectedType, getTypes, selectType }) => {
  const [filter, setFilter] = useState("");
  const filteredTypes = types.filter(type => type.typeName.toLowerCase().includes(filter));
  const handleChange = (e) => setFilter(e.target.value.toLowerCase());
  const rowRenderer = ({ key, index, style }) => {
    const type = filteredTypes[index];
    if (!type) return null;
    const selected = type.typeID === selectedType;
    return <Type {...{ type, key, style, selected, selectType }} />;
  };
  if (types.length === 0) {
    getTypes();
  }
  return (
    <div className="types-tree">
      <input value={filter} onChange={handleChange} />
      <AutoSizer>
        {({width, height}) => (
          <List
            ref="List"
            width={width}
            height={height}
            noRowsRenderer={() => <div></div>}
            overscanRowCount={0}
            rowCount={types.length}
            rowHeight={50}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
};

const stateToProps = (state) => ({
  types: Object.values(state.types.all),
  selectedType: state.types.selected // Not ideal
});

const dispatchToProps = { getTypes, selectType };

export default connect(stateToProps, dispatchToProps)(Tree);
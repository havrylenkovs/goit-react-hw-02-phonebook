import React from 'react';

const Filter = ({ filter, onChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
      }}
    >
      <label>Find contact by name</label>
      <input
        style={{
          height: '34px',
          background: '#ccd6e3',
          borderRadius: '6px',
          marginLeft: '10px',
        }}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </div>
  );
};
Filter.propTypes = {};
export default Filter;

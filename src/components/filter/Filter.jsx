import React from "react";

function Filter({ filterText, setFilterText, getValue }) {
  const onType = (value) => {
    setFilterText(value);
    getValue(value);
  };
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search Character"
        value={filterText}
        onChange={(e) => onType(e.target.value)}
      />
    </div>
  );
}

export default Filter;

import React from "react";
import ArrowDown from "../SvgIcons/ArrowDown";
import ArrowUp from "../SvgIcons/ArrowUp";

const TableHeadItem = ({ field, fieldSort, sortDirection, nameField }) => {
  const ArrowSort = ({ sortDirection }) => {
    return <>{sortDirection ? <ArrowDown /> : <ArrowUp />}</>;
  };
  return (
    <th scope="col" onClick={fieldSort}>
      {nameField}
      {field === nameField ? <ArrowSort sortDirection={sortDirection} /> : null}
    </th>
  );
};

export default TableHeadItem;

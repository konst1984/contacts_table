import React from "react";
import Preloader from "../Preloader/Preloader";
import Table from "../Table/Table";
import DetailItem from "../DetailItem/DetailItem";
import PropTypes from "prop-types";

const TableBody = ({ isLoading, detailItem }) => {

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Table />
          {detailItem && <DetailItem />}
        </>
      )}
    </>
  );
};

TableBody.propTypes = {
  isLoading: PropTypes.bool,
  detailItem: PropTypes.string,
}

export default TableBody;

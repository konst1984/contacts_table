import React from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";
import Switcher from "../Switcher/Switcher";

const Paginator = ({
  totalRowArr,
  getCurrentPage,
  currentPage,
  nextPage,
  previousPage,
}) => {

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li
          className={currentPage > 1 ? "page-item" : "page-item disabled"}
          onClick={previousPage}
        >
          <a className="page-link" href="#" tabIndex="-1">
            Previous
          </a>
        </li>
        {totalRowArr.map((p) => (
          <li
            className={currentPage === p ? "page-item active" : "page-item"}
            key={uniqid()}
            onClick={() => getCurrentPage(p)}
          >
            <a className="page-link" href="#">
              {p}
            </a>
          </li>
        ))}
        <li
          className={
            currentPage < totalRowArr.length
              ? "page-item"
              : "page-item disabled"
          }
          onClick={nextPage}
        >
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Paginator.propTypes ={
  getCurrentPage: PropTypes.func,
  nextPage:PropTypes.func,
  previousPage:PropTypes.func,
  totalRowArr: PropTypes.array,
  currentPage:PropTypes.number,
}

Paginator.defaultProps = {
  getCurrentPage: () => {},
  totalRowArr:{},
  nextPage:() => {},
  previousPage:() => {},
}

export default Paginator;

import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

const SearchLine = () => {
  const { onSearchSend } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className='input-search'>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => onSearchSend(searchValue)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchLine;

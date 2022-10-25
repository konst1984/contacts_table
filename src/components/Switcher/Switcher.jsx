import React from "react";
import PropTypes from 'prop-types'

const Switcher = ({ buttonHandler }) => {
  const smallUrl =
    "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  const bigUrl =
    "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px 0",
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => buttonHandler(smallUrl)}
      >
        32 contacts
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => buttonHandler(bigUrl)}
      >
        1000 contacts
      </button>
    </div>
  );
};

Switcher.propTypes ={
  buttonHandler: PropTypes.func
}

Switcher.defaultProps = {
  buttonHandler: () => {}
}

export default Switcher;

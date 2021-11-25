import React from "react";
import PropTypes from "prop-types";

// popup component
const Popup = ({ title, text, handleButtonClick, buttonText }) => (
  <div className="popup">
    <h1>{title}</h1>
    <p>{text}</p>
    <button type="button" className="button" onClick={handleButtonClick}>
      {buttonText}
    </button>
  </div>
);

Popup.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  handleButtonClick: PropTypes.func,
  buttonText: PropTypes.string,
};

export default Popup;

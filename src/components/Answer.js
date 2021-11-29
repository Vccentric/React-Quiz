import React from "react";
import PropTypes from "prop-types";

// answer component
const Answer = ({ text }) => <div className="answer">{text}</div>;

Answer.propTypes = {
  text: PropTypes.string,
};

export default Answer;

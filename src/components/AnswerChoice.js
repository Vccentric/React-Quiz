import React from "react";
import PropTypes from "prop-types";

// answer choice component
const AnswerChoice = ({ value, checkAnswer }) => {
  return (
    <button className="answer" onClick={checkAnswer}>
      {value}
    </button>
  );
};

AnswerChoice.propTypes = {
  value: PropTypes.string,
  checkAnswer: PropTypes.func,
};

export default AnswerChoice;

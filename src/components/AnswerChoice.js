import React from "react";
import PropTypes from "prop-types";

// answer choice component
const AnswerChoice = ({ value, selected, selectAnswer }) => {
  const classNames = selected ? "answer selected" : "answer";
  return (
    <button className={classNames} onClick={selectAnswer}>
      {value}
    </button>
  );
};

AnswerChoice.propTypes = {
  value: PropTypes.string,
  selected: PropTypes.bool,
  selectAnswer: PropTypes.func,
};

export default AnswerChoice;

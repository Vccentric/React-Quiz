import React from "react";
import PropTypes from "prop-types";

// answer component
const Answer = ({ value, checkAnswer }) => {
  return (
    <button className="answer" onClick={() => checkAnswer()}>
      {value}
    </button>
  );
};

Answer.propTypes = {
  value: PropTypes.string,
  checkAnswer: PropTypes.func,
};

export default Answer;

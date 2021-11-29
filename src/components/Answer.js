import React from "react";
import PropTypes from "prop-types";

// answer component
const Answer = ({ text, total, currentIndex, setCurrentIndex }) => {
  return (
    <div
      className="answer"
      onClick={() => {
        const nextIndex = currentIndex + 1 >= total ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
      }}
    >
      {text}
    </div>
  );
};

Answer.propTypes = {
  text: PropTypes.string,
  total: PropTypes.number,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
};

export default Answer;

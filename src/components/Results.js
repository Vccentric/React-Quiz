import React from "react";
import PropTypes from "prop-types";

// results component
const Results = ({ correctAnswers, totalQuestions }) => {
  return (
    <p className="results">
      You have {correctAnswers} correct answers out of a total of{" "}
      {totalQuestions} questions!!!
    </p>
  );
};

Results.propTypes = {
  correctAnswers: PropTypes.number,
  totalQuestions: PropTypes.number,
};

export default Results;

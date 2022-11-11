import React from "react";
import PropTypes from "prop-types";

// results component
const Results = ({
  totalCorrectAnswers,
  totalQuestions,
  resetQuizStats,
  setQuizList,
}) => {
  return (
    <div id="results">
      <h2 className="title">Results:</h2>
      <p className="test-score">
        You have {totalCorrectAnswers} correct answers out of a total of{" "}
        {totalQuestions} questions!!!
      </p>
      <div className="actions-container">
        <button className="action quit" onClick={setQuizList}>
          Quit
        </button>
        <button className="action restart" onClick={resetQuizStats}>
          Restart
        </button>
      </div>
    </div>
  );
};

Results.propTypes = {
  totalCorrectAnswers: PropTypes.number,
  totalQuestions: PropTypes.number,
  resetQuizStats: PropTypes.func,
  setQuizList: PropTypes.func,
};

export default Results;

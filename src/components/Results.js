import React from "react";
import PropTypes from "prop-types";

// results component
const Results = ({
  correctAnswers,
  totalQuestions,
  resetQuizStats,
  setView,
}) => {
  // setup functions
  const quit = () => setView({ showQuizList: true, showQuiz: false });

  return (
    <div id="results">
      <p className="test-score">
        You have {correctAnswers} correct answers out of a total of{" "}
        {totalQuestions} questions!!!
      </p>
      <button className="restart" onClick={resetQuizStats}>
        Restart
      </button>
      <button className="quit" onClick={quit}>
        Quit
      </button>
    </div>
  );
};

Results.propTypes = {
  correctAnswers: PropTypes.number,
  totalQuestions: PropTypes.number,
  resetQuizStats: PropTypes.func,
  setView: PropTypes.func,
};

export default Results;

import React from "react";
import PropTypes from "prop-types";

// results component
const Results = ({ correctAnswers, totalQuestions, setQuizStats, setView }) => {
  const resetQuiz = {
    currentIndex: 0,
    correctAnswers: 0,
    selectedAnswer: false,
    showResults: false,
  };
  return (
    <div id="results">
      <p className="test-score">
        You have {correctAnswers} correct answers out of a total of{" "}
        {totalQuestions} questions!!!
      </p>
      <button className="restart" onClick={() => setQuizStats(resetQuiz)}>
        Restart
      </button>
      <button
        className="quit"
        onClick={() => setView({ showQuizList: true, showQuiz: false })}
      >
        Quit
      </button>
    </div>
  );
};

Results.propTypes = {
  correctAnswers: PropTypes.number,
  totalQuestions: PropTypes.number,
  setQuizStats: PropTypes.func,
  setView: PropTypes.func,
};

export default Results;

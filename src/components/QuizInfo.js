import React from "react";
import PropTypes from "prop-types";

// quiz info component
const QuizInfo = ({ count, total, score, question }) => (
  <div id="quizInfo">
    <div id="quizStatus">
      <div id="questionCount">
        Question:
        <span>{count + 1}</span>/<span>{total}</span>
      </div>
      <div id="score">
        Score:
        {score}
      </div>
    </div>
    <p id="question">{question}</p>
  </div>
);

QuizInfo.propTypes = {
  count: PropTypes.number,
  total: PropTypes.number,
  score: PropTypes.number,
  question: PropTypes.string,
};

export default QuizInfo;

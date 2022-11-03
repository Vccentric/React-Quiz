import React from "react";
import PropTypes from "prop-types";

// quiz item component
const QuizItem = ({ quiz, setQuiz }) => {
  // setup variables
  const name = quiz.name || "";
  const total = quiz.questions?.length || 0;

  // setup functions
  const onClick = () => setQuiz(quiz);

  return (
    <div className="quiz" onClick={onClick}>
      <div className="name">{name}</div>
      <div className="total">{total} Questions</div>
    </div>
  );
};

QuizItem.propTypes = {
  quiz: PropTypes.object,
  setQuiz: PropTypes.func,
};

export default QuizItem;

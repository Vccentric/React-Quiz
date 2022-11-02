import React from "react";
import PropTypes from "prop-types";

// quiz item component
const QuizItem = ({ quiz, setView }) => {
  // setup variables
  const name = quiz.name || "";
  const total = quiz.questions?.length || 0;

  // setup functions
  const onClick = () =>
    setView({
      showQuizList: false,
      showQuiz: quiz,
    });

  return (
    <div className="quiz" onClick={onClick}>
      <div className="name">{name}</div>
      <div className="total">{total} Questions</div>
    </div>
  );
};

QuizItem.propTypes = {
  quiz: PropTypes.object,
  setView: PropTypes.func,
};

export default QuizItem;

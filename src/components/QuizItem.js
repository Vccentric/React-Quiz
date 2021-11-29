import React from "react";
import PropTypes from "prop-types";

// quiz item component
const QuizItem = ({ quiz, setView }) => {
  const name = quiz.name || "";
  const total = quiz.questions?.length || 0;
  return (
    <div
      className="quiz"
      onClick={() =>
        setView({
          showQuizList: false,
          showQuiz: quiz,
        })
      }
    >
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

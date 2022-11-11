import React from "react";
import PropTypes from "prop-types";
import QuizItem from "./QuizItem";

// component that contains a list of quizzes
const QuizList = ({ data, setQuiz }) => {
  // setup elements
  const quizzes = data?.quizzes?.map((quiz, index) => {
    const key = index * Math.random();
    return (
      <li key={key}>
        <QuizItem quiz={quiz} setQuiz={setQuiz} />
      </li>
    );
  });

  return (
    <div id="quiz-list">
      <div className="header">
        <h1 className="title">Welcome!!!</h1>
      </div>
      <div className="body">
        <h2 className="title">Quizzes:</h2>
        <ul>{quizzes}</ul>
      </div>
    </div>
  );
};

QuizList.propTypes = {
  data: PropTypes.object,
  setQuiz: PropTypes.func,
};

export default QuizList;

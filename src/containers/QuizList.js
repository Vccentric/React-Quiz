import React from "react";
import PropTypes from "prop-types";
import QuizItem from "../components/QuizItem";

// container component that contains a list of quizzes
const QuizList = ({ data, setView }) => {
  // setup elements
  const quizzes = data?.quizzes?.map((quiz, index) => {
    const key = index * Math.random();
    return (
      <li key={key}>
        <QuizItem quiz={quiz} setView={setView} />
      </li>
    );
  });

  return (
    <div id="quiz-list">
      <div className="header">
        <h1 className="title">Lets Play!!!</h1>
        <h2 className="sub-title">And be the first!</h2>
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
  setView: PropTypes.func,
};

export default QuizList;

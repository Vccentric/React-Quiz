import React from "react";
import PropTypes from "prop-types";
import QuizItem from "../components/QuizItem";

// container component that contains a list of quizzes
const QuizList = ({ data }) => {
  const quizzes = data?.quizzes?.map((quiz, index) => {
    const key = index * Math.random();
    const name = quiz.name || "";
    const total = quiz.questions?.length || 0;
    return (
      <li key={key}>
        <QuizItem name={name} total={total} />
      </li>
    );
  });
  return (
    <div id="quiz-list">
      <div id="header">
        <h1 className="title">Lets Play!!!</h1>
        <h2 className="sub-title">And be the first!</h2>
      </div>
      <div id="body">
        <h2 className="title">Quizzes:</h2>
        <ul>{quizzes}</ul>
      </div>
    </div>
  );
};

QuizList.propTypes = {
  data: PropTypes.object,
};

export default QuizList;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import "normalize.css";
import "../styles/styles.scss";

// main container component
const QuizApp = ({ data }) => {
  const [showQuizList, setQuizList] = useState(false);
  const [selectedQuiz, setQuiz] = useState(false);
  useEffect(() => {
    setQuizList(true);
    setQuiz(data.quizzes[0]);
  });
  return (
    <div id="quiz-app">
      {showQuizList && <QuizList data={data} />}
      {selectedQuiz && <Quiz {...selectedQuiz} />}
    </div>
  );
};

QuizApp.propTypes = {
  data: PropTypes.object,
};

export default QuizApp;

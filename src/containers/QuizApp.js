import React, { useState } from "react";
import PropTypes from "prop-types";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import "normalize.css";
import "../styles/styles.scss";

// main container component
const QuizApp = ({ data }) => {
  const [view, setView] = useState({
    showQuizList: true,
    showQuiz: false,
  });
  return (
    <div id="quiz-app">
      {view?.showQuizList && <QuizList data={data} setView={setView} />}
      {view?.showQuiz && <Quiz {...view.showQuiz} setView={setView} />}
    </div>
  );
};

QuizApp.propTypes = {
  data: PropTypes.object,
};

export default QuizApp;

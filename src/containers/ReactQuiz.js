import React, { useState } from "react";
import PropTypes from "prop-types";
import QuizList from "./QuizList";
import Quiz from "./Quiz";

// main container component
const ReactQuiz = ({ data }) => {
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

ReactQuiz.propTypes = {
  data: PropTypes.object,
};

export default ReactQuiz;

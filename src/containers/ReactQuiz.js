import React, { useState } from "react";
import PropTypes from "prop-types";
import QuizList from "../components/QuizList";
import Quiz from "./Quiz";

// main container component
const ReactQuiz = ({ data }) => {
  // setup state
  const [view, setView] = useState({
    showQuizList: true,
    showQuiz: false,
  });

  return (
    <div id="react-quiz">
      {view?.showQuizList && <QuizList data={data} setView={setView} />}
      {view?.showQuiz && <Quiz {...view.showQuiz} setView={setView} />}
    </div>
  );
};

ReactQuiz.propTypes = {
  data: PropTypes.object,
};

export default ReactQuiz;

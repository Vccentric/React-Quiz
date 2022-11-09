import React, { useState } from "react";
import PropTypes from "prop-types";
import QuizList from "../components/QuizList";
import Quiz from "./Quiz";

// initial state
const initState = {
  quizList: true,
  selectedQuiz: false,
};

// main container component
const ReactQuiz = ({ data, localState = initState }) => {
  // setup state
  const [view, setView] = useState(localState);

  // setup functions
  const setQuizList = () => setView({ quizList: true, selectedQuiz: false });
  const setQuiz = (quiz) => setView({ quizList: false, selectedQuiz: quiz });

  return (
    <div id="react-quiz">
      {view?.quizList && <QuizList data={data} setQuiz={setQuiz} />}
      {view?.selectedQuiz && (
        <Quiz selectedQuiz={view?.selectedQuiz} setQuizList={setQuizList} />
      )}
    </div>
  );
};

ReactQuiz.propTypes = {
  data: PropTypes.object,
  localState: PropTypes.object,
};

export default ReactQuiz;

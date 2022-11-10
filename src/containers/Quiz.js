import React, { useState } from "react";
import PropTypes from "prop-types";
import Question from "../components/Question";
import Results from "../components/Results";

// initial state
const initState = {
  currentIndex: 0,
  selectedAnswer: null,
  showResults: false,
  totalCorrectAnswers: 0,
};

// container component that contains a quiz
const Quiz = ({ selectedQuiz, setQuizList, localState = initState }) => {
  // setup state
  const [quizStats, setQuizStats] = useState(localState);

  // setup variables
  const { name, questions } = selectedQuiz;
  const { currentIndex, totalCorrectAnswers, showResults } = quizStats;
  const totalQuestions = questions.length || 0;
  const currentQuestion = questions?.[currentIndex] || {};

  // setup functions
  const resetQuizStats = () =>
    setQuizStats({
      currentIndex: 0,
      selectedAnswer: null,
      showResults: false,
      totalCorrectAnswers: 0,
    });

  return (
    <div id="quiz">
      <div className="header">
        <h1 className="title">{name}</h1>
      </div>
      <div className="body">
        {!showResults && (
          <Question
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            quizStats={quizStats}
            setQuizStats={setQuizStats}
          />
        )}
        {showResults && (
          <Results
            totalCorrectAnswers={totalCorrectAnswers}
            totalQuestions={totalQuestions}
            resetQuizStats={resetQuizStats}
            setQuizList={setQuizList}
          />
        )}
      </div>
    </div>
  );
};

Quiz.propTypes = {
  selectedQuiz: PropTypes.object,
  setQuizList: PropTypes.func,
  localState: PropTypes.object,
};

export default Quiz;

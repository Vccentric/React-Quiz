import React, { useState } from "react";
import PropTypes from "prop-types";
import Question from "../components/Question";
import Results from "../components/Results";

// container component that contains a quiz
const Quiz = ({ name, questions, setView }) => {
  // setup state
  const [quizStats, setQuizStats] = useState({
    currentIndex: 0,
    correctAnswers: 0,
    selectedAnswer: false,
    showResults: false,
  });

  // setup variables
  const { currentIndex, correctAnswers, showResults } = quizStats;
  const totalQuestions = questions.length || 0;
  const currentQuestion = questions?.[currentIndex];

  // setup functions
  const resetQuizStats = () =>
    setQuizStats({
      currentIndex: 0,
      correctAnswers: 0,
      selectedAnswer: false,
      showResults: false,
    });

  return (
    <div id="quiz">
      <div className="header">
        <h1 className="quiz-name">{name}</h1>
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
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            resetQuizStats={resetQuizStats}
            setView={setView}
          />
        )}
      </div>
    </div>
  );
};

Quiz.propTypes = {
  name: PropTypes.string,
  questions: PropTypes.array,
  setView: PropTypes.func,
};

export default Quiz;

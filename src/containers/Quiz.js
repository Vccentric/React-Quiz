import React, { useState } from "react";
import PropTypes from "prop-types";
import Question from "../components/Question";
import Results from "../components/Results";

// container component that contains a quiz
const Quiz = ({ selectedQuiz, setQuizList }) => {
  // setup state
  const [quizStats, setQuizStats] = useState({
    currentIndex: 0,
    correctAnswers: 0,
    selectedAnswer: false,
    showResults: false,
  });

  // setup variables
  const { name, questions } = selectedQuiz;
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
            correctAnswers={correctAnswers}
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
};

export default Quiz;

import React, { useState } from "react";
import PropTypes from "prop-types";
import Answer from "../components/Answer";
import Results from "../components/Results";

// container component that contains a quiz
const Quiz = ({ name, questions }) => {
  // setup state
  const [quizStats, setQuizStats] = useState({
    currentIndex: 0,
    correctAnswers: 0,
    selectedAnswer: false,
    showResults: false,
  });

  // setup variables
  const { currentIndex, correctAnswers, selectedAnswer, showResults } =
    quizStats;
  const totalQuestions = questions.length || 0;
  const question = questions?.[currentIndex]?.question;
  const answers = questions?.[currentIndex]?.answers;

  // setup elements
  const answersOptions = answers?.map((item, index) => {
    const key = index * Math.random();
    const value = item || "";
    const checkAnswer = () => {
      if (selectedAnswer) return false;
      const correctAnswer = questions?.[currentIndex]?.correctAnswer;
      setQuizStats({
        ...quizStats,
        correctAnswers:
          value === correctAnswer ? correctAnswers + 1 : correctAnswers,
        selectedAnswer: true,
      });
    };
    return (
      <li key={key}>
        <Answer value={value} checkAnswer={checkAnswer} />
      </li>
    );
  });

  return (
    <div id="quiz">
      <div id="header">
        <h1 className="quiz-name">{name}</h1>
      </div>
      <div id="body">
        {!showResults && (
          <div className="">
            <h2 className="question-index-total">
              Question {currentIndex + 1}/{totalQuestions}
            </h2>
            <p className="question">{question}</p>
            <ul>{answersOptions}</ul>
            {selectedAnswer && (
              <button
                onClick={() => {
                  const nextIndex = currentIndex + 1;
                  if (nextIndex < totalQuestions) {
                    setQuizStats({
                      ...quizStats,
                      currentIndex: nextIndex,
                      selectedAnswer: false,
                    });
                  } else {
                    setQuizStats({
                      ...quizStats,
                      showResults: true,
                    });
                  }
                }}
              >
                Next
              </button>
            )}
          </div>
        )}
        {showResults && (
          <Results
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
          />
        )}
      </div>
    </div>
  );
};

Quiz.propTypes = {
  name: PropTypes.string,
  questions: PropTypes.array,
};

export default Quiz;

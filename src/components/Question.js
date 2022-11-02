import React from "react";
import PropTypes from "prop-types";
import AnswerChoice from "./AnswerChoice";

// question component
const Question = ({
  currentQuestion,
  totalQuestions,
  quizStats,
  setQuizStats,
}) => {
  // setup variables
  const { currentIndex, correctAnswers, selectedAnswer } = quizStats;
  const { question, answers, correctAnswer } = currentQuestion;

  // setup functions
  const next = () => {
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
  };

  // setup elements
  const answerChoices = answers?.map((item, index) => {
    // setup variable
    const key = index * Math.random();
    const value = item || "";

    // setup functions
    const checkAnswer = () => {
      if (selectedAnswer) return false;
      const count =
        value === correctAnswer ? correctAnswers + 1 : correctAnswers;
      setQuizStats({
        ...quizStats,
        correctAnswers: count,
        selectedAnswer: true,
      });
    };

    return (
      <li key={key}>
        <AnswerChoice value={value} checkAnswer={checkAnswer} />
      </li>
    );
  });

  return (
    <div className="question">
      <h2 className="index-total">
        Question {currentIndex + 1}/{totalQuestions}
      </h2>
      <p className="question-text">{question}</p>
      <ul>{answerChoices}</ul>
      {selectedAnswer && <button onClick={next}>Next</button>}
    </div>
  );
};

Question.propTypes = {
  currentQuestion: PropTypes.object,
  totalQuestions: PropTypes.number,
  quizStats: PropTypes.object,
  setQuizStats: PropTypes.func,
};

export default Question;

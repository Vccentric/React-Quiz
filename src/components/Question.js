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
  const { currentIndex, totalCorrectAnswers, selectedAnswer } = quizStats;
  const { question, answerChoices, correctAnswer } = currentQuestion;

  // setup functions
  const next = () => {
    const nextIndex = currentIndex + 1;
    const count =
      selectedAnswer === correctAnswer
        ? totalCorrectAnswers + 1
        : totalCorrectAnswers;
    if (nextIndex < totalQuestions) {
      setQuizStats({
        ...quizStats,
        currentIndex: nextIndex,
        selectedAnswer: null,
        totalCorrectAnswers: count,
      });
    } else {
      setQuizStats({
        ...quizStats,
        currentIndex: 0,
        selectedAnswer: null,
        showResults: true,
      });
    }
  };

  // setup elements
  const listAnswerChoices = answerChoices?.map((item, index) => {
    // setup variable
    const key = index * Math.random();
    const value = item || "";
    const selected = selectedAnswer === value;

    // setup functions
    const selectAnswer = () => {
      setQuizStats({
        ...quizStats,
        selectedAnswer: value,
      });
    };

    return (
      <li key={key}>
        <AnswerChoice
          value={value}
          selected={selected}
          selectAnswer={selectAnswer}
        />
      </li>
    );
  });

  return (
    <div className="question">
      <h2 className="index-total">
        Question {currentIndex + 1}/{totalQuestions}
      </h2>
      <p className="question-text">{question}</p>
      <ul>{listAnswerChoices}</ul>
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
import React from "react";
import PropTypes from "prop-types";
import AnswerOption from "../components/AnswerOption";
import Message from "../components/Message";
import Popup from "../components/Popup";
import QuizInfo from "../components/QuizInfo";
import "../ReactQuiz.css";

// main component containing the entire quiz
const QuizContainer = ({
  questions = [],
  currentIndex,
  score,
  start,
  finish,
  isAnswered,
  isCorrect,
  selectedAnswer,
  handleStartClick,
  handleFinishClick,
  handleRestartClick,
  handleNextClick,
  handleAnswerClick,
}) => {
  let element = null;
  const total = questions.length;

  // check which display to render
  if (!start) {
    // check for beginning start popup
    element = (
      <Popup
        title="Welcome!"
        text="This is a simple quiz application built using React.js"
        buttonText="Start quiz"
        handleButtonClick={handleStartClick}
      />
    );
  } else if (finish) {
    // check for finish/end of quiz
    const text = `Your final score for this quiz is: ${score}/${total}`;
    element = (
      <Popup
        title="Congratulations!"
        text={text}
        buttonText="Restart Quiz"
        handleButtonClick={handleRestartClick}
      />
    );
  } else {
    // display question and answers
    const currentQuestion = questions[currentIndex];
    const { question } = currentQuestion;

    // setup the questions's answer options
    const answerOptions = currentQuestion.answerOptions.map((answer, index) => (
      <AnswerOption
        key={Math.random()}
        index={index}
        text={answer}
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        selectedAnswer={selectedAnswer}
        handleAnswerClick={handleAnswerClick}
      />
    ));

    // check which button (next/finish) to display
    const buttonText =
      currentIndex + 1 === total ? "Finish Quiz" : "Next Question";
    const buttonClick =
      currentIndex + 1 === total ? handleFinishClick : handleNextClick;
    const controlsClasses = isAnswered ? "" : "hidden";

    // setup element
    element = (
      <div id="quiz">
        <QuizInfo
          count={currentIndex}
          total={total}
          score={score}
          question={question}
        />
        <ul id="answerOptions">{answerOptions}</ul>
        <div id="quizControls" className={controlsClasses}>
          <Message isCorrect={isCorrect} />
          <button type="button" className="button" onClick={buttonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
  return element;
};

QuizContainer.propTypes = {
  questions: PropTypes.array,
  currentIndex: PropTypes.number,
  score: PropTypes.number,
  start: PropTypes.bool,
  finish: PropTypes.bool,
  isAnswered: PropTypes.bool,
  isCorrect: PropTypes.bool,
  selectedAnswer: PropTypes.number,
  handleStartClick: PropTypes.func,
  handleFinishClick: PropTypes.func,
  handleRestartClick: PropTypes.func,
  handleNextClick: PropTypes.func,
  handleAnswerClick: PropTypes.func,
};

export default QuizContainer;

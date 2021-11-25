import React from "react";
import PropTypes from "prop-types";

// answer option component
const AnswerOption = ({
  index,
  text,
  isAnswered,
  isCorrect,
  selectedAnswer,
  handleAnswerClick,
}) => {
  const inputProps = {};

  // check if need to add click event
  if (!isAnswered) {
    inputProps.onClick = () => handleAnswerClick(index);
  }

  // need to update the CSS classes depending on the state
  if (selectedAnswer === index && isAnswered && isCorrect) {
    inputProps.className = "answer correct";
  } else if (selectedAnswer === index && isAnswered && !isCorrect) {
    inputProps.className = "answer wrong";
  } else if (isAnswered) {
    inputProps.className = "answer disabled";
  } else {
    inputProps.className = "answer";
  }

  return (
    <li data-value={index} {...inputProps}>
      <span>{index + 1}.</span>
      <p>{text}</p>
    </li>
  );
};

AnswerOption.propTypes = {
  index: PropTypes.number,
  text: PropTypes.string,
  isAnswered: PropTypes.bool,
  isCorrect: PropTypes.bool,
  selectedAnswer: PropTypes.number,
  handleAnswerClick: PropTypes.func,
};

export default AnswerOption;

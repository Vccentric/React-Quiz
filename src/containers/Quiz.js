/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Answer from "../components/Answer";

// container component that contains a quiz
const Quiz = ({ name, questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalQuestions = questions.length || 0;
  const question = questions?.[currentIndex]?.question;
  const answers = questions?.answers?.map((item, index) => {
    const key = index * Math.random();
    const text = item || "";
    return (
      <li key={key}>
        <Answer text={text} />
      </li>
    );
  });
  return (
    <div id="question">
      <div id="header">
        <h1 className="title">{name}</h1>
      </div>
      <div id="body">
        <h2 className="question-index-total">
          Question {currentIndex + 1}/{totalQuestions}
        </h2>
        <p>{question}</p>
        <ul>{answers}</ul>
      </div>
    </div>
  );
};

Quiz.propTypes = {
  name: PropTypes.string,
  questions: PropTypes.array,
};

export default Quiz;

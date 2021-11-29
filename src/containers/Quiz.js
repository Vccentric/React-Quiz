import React, { useState } from "react";
import PropTypes from "prop-types";
import Answer from "../components/Answer";

// container component that contains a quiz
const Quiz = ({ name, questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = questions.length || 0;
  const question = questions?.[currentIndex]?.question;
  const answers = questions?.[currentIndex]?.answers?.map((item, index) => {
    const key = index * Math.random();
    const text = item || "";
    return (
      <li key={key}>
        <Answer
          text={text}
          total={total}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </li>
    );
  });
  return (
    <div id="quiz">
      <div id="header">
        <h1 className="quiz-name">{name}</h1>
      </div>
      <div id="body">
        <h2 className="question-index-total">
          Question {currentIndex + 1}/{total}
        </h2>
        <p className="question">{question}</p>
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

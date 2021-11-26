import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QuizList from "./QuizList";
import "normalize.css";
import "../styles/styles.scss";

// main container component
const QuizApp = ({ data }) => {
  const [showQuizList, setQuizList] = useState(false);
  useEffect(() => {
    setQuizList(true);
  });
  return <div id="quiz-app">{showQuizList && <QuizList data={data} />}</div>;
};

QuizApp.propTypes = {
  data: PropTypes.object,
};

export default QuizApp;

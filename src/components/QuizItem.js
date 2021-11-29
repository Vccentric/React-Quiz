import React from "react";
import PropTypes from "prop-types";

// quiz item component
const QuizItem = ({ name, total }) => (
  <div className="quiz">
    <div className="name">{name}</div>
    <div className="total">{total} Questions</div>
  </div>
);

QuizItem.propTypes = {
  name: PropTypes.string,
  total: PropTypes.number,
};

export default QuizItem;

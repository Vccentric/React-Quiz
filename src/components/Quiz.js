import React from "react";
import PropTypes from "prop-types";

// quiz component
const Quiz = ({ name, total }) => (
  <div className="quiz">
    <div className="name">{name}</div>
    <div className="total">{total} Questions</div>
  </div>
);

Quiz.propTypes = {
  name: PropTypes.string,
  total: PropTypes.number,
};

export default Quiz;

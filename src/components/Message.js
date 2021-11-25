import React from "react";
import PropTypes from "prop-types";

// message component
const Message = ({ isCorrect }) => (
  <div id="message" className={isCorrect ? "correct" : "wrong"}>
    {isCorrect ? "Correct Answer!" : "Wrong Answer!"}
  </div>
);

Message.propTypes = {
  isCorrect: PropTypes.bool,
};

export default Message;

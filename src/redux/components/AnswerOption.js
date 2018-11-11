import React from "react";
import { hot } from "react-hot-loader";

// answer option component
const AnswerOption = ({ index, text, handleAnswerClick }) => (
    <li className="answer" onClick={handleAnswerClick} data-value={index}>
        <span>
            {index + 1}
            .
        </span>
        <p>{text}</p>
    </li>
);

export default hot(module)(AnswerOption);

import React from "react";
import { hot } from "react-hot-loader";

// answer option component
const AnswerOption = ({ index, text, isAnswered, handleAnswerClick }) => {
    const inputProps = {};
    if (!isAnswered) {
        inputProps.onClick = () => handleAnswerClick(index);
    }
    return (
        <li
            className="answer"
            data-value={index}
            {...inputProps}
        >
            <span>
                {index + 1}
                .
            </span>
            <p>{text}</p>
        </li>
    );
};

export default hot(module)(AnswerOption);

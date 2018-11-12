import React from "react";
import { hot } from "react-hot-loader";

// quiz info component
const QuizInfo = ({ count, total, score }) => (
    <div id="quizInfo">
        <div id="questionCount">
            Question:
            <span>{count + 1}</span>
            /
            <span>{total}</span>
        </div>
        <div id="score">
            Score:
            {score}
        </div>
    </div>
);

export default hot(module)(QuizInfo);

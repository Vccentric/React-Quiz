import React from "react";
import { hot } from "react-hot-loader";

// quiz info component
const QuizInfo = ({ count, total, score, question }) => (
    <div id="quizInfo">
        <div id="quizStatus">
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
        <p id="question">{question}</p>
    </div>
);

export default hot(module)(QuizInfo);

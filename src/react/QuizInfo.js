import React from 'react';
import { hot } from 'react-hot-loader';

// quiz info component
function QuizInfo(props) {
    const { count, total, score } = props;
    return (
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
}

export default hot(module)(QuizInfo);

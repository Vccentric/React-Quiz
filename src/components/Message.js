import React from 'react';
import { hot } from 'react-hot-loader';

// message component
const Message = ({ isCorrect }) => (
    <div
        id="message"
        className={isCorrect ? 'correct' : 'wrong'}
    >
        {isCorrect ? 'Correct Answer!' : 'Wrong Answer!'}
    </div>
);

export default hot(module)(Message);

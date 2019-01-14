import React from 'react';
import { hot } from 'react-hot-loader';

// message component
const Message = ({ isAnswered, isCorrect }) => (
    <div
        id="message"
        style={isAnswered ? { display: 'block' } : { display: 'none' }}
        className={isCorrect ? 'correct' : 'wrong'}
    >
        {isCorrect ? 'Correct Answer!' : 'Wrong Answer!'}
    </div>
);

export default hot(module)(Message);

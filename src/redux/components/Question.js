import React from 'react';
import { hot } from 'react-hot-loader';

// question component
const Question = ({ question }) => (
    <p id="question">{question}</p>
);

export default hot(module)(Question);

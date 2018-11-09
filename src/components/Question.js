import React from 'react';
import { hot } from 'react-hot-loader';

// question component
function Question(props) {
    const { question } = props;
    return <p id="question">{question}</p>;
}

export default hot(module)(Question);

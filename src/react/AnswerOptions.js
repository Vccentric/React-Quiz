import React from 'react';
import { hot } from 'react-hot-loader';

// answer option component
class AnswerOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAnswerClick = this.handleAnswerClick.bind(this);
    }

    // function to handle click action of an answer option
    handleAnswerClick(event) {
        const { handleAnswerClick } = this.props;
        handleAnswerClick(event);
    }

    render() {
        const { index, text } = this.props;
        return (
            <li className="answer" onClick={this.handleAnswerClick} data-value={index}>
                <span>
                    {index + 1}
                    .
                </span>
                <p>{text}</p>
            </li>
        );
    }
}

export default hot(module)(AnswerOption);

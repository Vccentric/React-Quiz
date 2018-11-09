import React from 'react';
import { hot } from 'react-hot-loader';

// popup component
class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    // function to handle click action of the button
    handleButtonClick(event) {
        const { handleButtonClick } = this.props;
        handleButtonClick(event);
    }

    render() {
        const { title, text, buttonText } = this.props;
        return (
            <div className="popup">
                <h1>{title}</h1>
                <p>{text}</p>
                <button type="button" className="button" onClick={this.handleButtonClick}>{buttonText}</button>
            </div>
        );
    }
}

export default hot(module)(Popup);

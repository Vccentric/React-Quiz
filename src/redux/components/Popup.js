import React from "react";
import { hot } from "react-hot-loader";

// popup component
const Popup = ({ title, text, handleButtonClick, buttonText }) => (
    <div className="popup">
        <h1>{title}</h1>
        <p>{text}</p>
        <button type="button" className="button" onClick={handleButtonClick}>
            {buttonText}
        </button>
    </div>
);

export default hot(module)(Popup);

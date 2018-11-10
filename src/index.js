import React from "react";
import ReactDOM from "react-dom";
import QuizContainer from "./react/QuizContainer";
import * as data from "../data/data.json";

// using react only build
ReactDOM.render(<QuizContainer data={data.default} />, document.getElementById("root"));

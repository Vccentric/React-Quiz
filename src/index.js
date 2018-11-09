import React from "react";
import ReactDOM from "react-dom";
import QuizContainer from "./containers/QuizContainer";
import * as data from "../data/data.json";

ReactDOM.render(<QuizContainer data={data.default} />, document.getElementById("root"));

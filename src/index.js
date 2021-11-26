import React from "react";
import ReactDOM from "react-dom";
import QuizApp from "./containers/QuizApp";
import data from "../data/quizzes.json";

ReactDOM.render(<QuizApp data={data} />, document.getElementById("root"));

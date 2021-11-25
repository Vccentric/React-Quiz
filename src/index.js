import React from "react";
import ReactDOM from "react-dom";
import QuizList from "./containers/QuizList";
import data from "../data/quizzes.json";

ReactDOM.render(<QuizList data={data} />, document.getElementById("root"));

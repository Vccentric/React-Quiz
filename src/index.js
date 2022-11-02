import React from "react";
import { createRoot } from "react-dom/client";
import ReactQuiz from "./containers/ReactQuiz";
import "normalize.css";
import "./styles/quiz.scss";
import data from "../data/quizzes.json";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ReactQuiz data={data} />);

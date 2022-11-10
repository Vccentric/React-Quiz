import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import React from "react";
import QuizItem from "./QuizItem";

// setup variables
const quiz = { name: "Quiz Name", questions: [1] };
const setQuiz = jest.fn();

test("renders correctly - snapshot", () => {
  const tree = renderer
    .create(<QuizItem quiz={quiz} setQuiz={setQuiz} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders quiz item with empty quiz object", () => {
  const { container } = render(<QuizItem quiz={{}} setQuiz={setQuiz} />);
  const quizNameText = container.getElementsByClassName("name");
  const totalQuestionText = container.getElementsByClassName("total");
  expect(quizNameText?.[0]?.textContent).toBe("");
  expect(totalQuestionText?.[0]?.textContent).toBe("0 Questions");
});

test("renders quiz item with defined quiz object", () => {
  render(<QuizItem quiz={quiz} setQuiz={setQuiz} />);
  const quizNameText = screen.getByText("Quiz Name");
  const totalQuestionText = screen.getByText("1 Questions");
  expect(quizNameText).toBeInTheDocument();
  expect(totalQuestionText).toBeInTheDocument();
});

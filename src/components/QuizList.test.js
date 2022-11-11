import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import React from "react";
import QuizList from "./QuizList";

// setup variables
const setQuiz = jest.fn();

test("renders correctly - snapshot", () => {
  const tree = renderer
    .create(<QuizList data={{}} setQuiz={setQuiz} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders results with mock values", () => {
  const mockData = { quizzes: [{ name: "abc" }, { name: "def" }] };
  render(<QuizList data={mockData} setQuiz={setQuiz} />);
  expect(screen.getByText("abc")).toBeInTheDocument();
  expect(screen.getByText("def")).toBeInTheDocument();
});

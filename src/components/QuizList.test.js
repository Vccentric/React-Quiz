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
  const item1 = screen.getByText("abc");
  const item2 = screen.getByText("def");
  expect(item1).toBeInTheDocument();
  expect(item2).toBeInTheDocument();
});

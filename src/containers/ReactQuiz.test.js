import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import React from "react";
import ReactQuiz from "./ReactQuiz";
import data from "../../data/quizzes.json";

test("renders correctly - snapshot", () => {
  const tree = renderer.create(<ReactQuiz data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders quiz list", () => {
  const initState = {
    quizList: true,
    selectedQuiz: false,
  };
  render(<ReactQuiz data={data} localState={initState} />);
  expect(screen.getByText("Welcome!!!")).toBeInTheDocument();
});

test("renders specific quiz", () => {
  const initState = {
    quizList: false,
    selectedQuiz: data?.quizzes?.[0],
  };
  render(<ReactQuiz data={data} localState={initState} />);
  expect(screen.getByText("Beginner Mathematics")).toBeInTheDocument();
});

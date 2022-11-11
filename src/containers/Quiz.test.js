import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Quiz from "./Quiz";

// setup variables
const selectedQuiz = {
  name: "Quiz Name",
  questions: [
    {
      question: "Question?",
      answerChoices: ["1", "2", "3"],
      correctAnswer: "1",
    },
  ],
};
const setQuizList = jest.fn();
const initState = {
  currentIndex: 0,
  selectedAnswer: null,
  showResults: false,
  totalCorrectAnswers: 0,
};

test("renders correctly - snapshot", () => {
  const tree = renderer
    .create(
      <Quiz
        selectedQuiz={selectedQuiz}
        setQuizList={setQuizList}
        localState={initState}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders question", () => {
  render(
    <Quiz
      selectedQuiz={selectedQuiz}
      setQuizList={setQuizList}
      localState={initState}
    />
  );
  expect(screen.getByText("Question?")).toBeInTheDocument();
});

test("renders results summary", () => {
  const mockState = initState;
  mockState.showResults = true;
  render(
    <Quiz
      selectedQuiz={selectedQuiz}
      setQuizList={setQuizList}
      localState={mockState}
    />
  );
  expect(screen.getByText("Results:")).toBeInTheDocument();
});

test("renders results summary then user clicks on restart button", async () => {
  const mockState = initState;
  mockState.showResults = true;
  render(
    <Quiz
      selectedQuiz={selectedQuiz}
      setQuizList={setQuizList}
      localState={mockState}
    />
  );
  expect(screen.getByText("Results:")).toBeInTheDocument();
  await userEvent.click(screen.getByText("Restart"));
  expect(screen.getByText("Question?")).toBeInTheDocument();
});

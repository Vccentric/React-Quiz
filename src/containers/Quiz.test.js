import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
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
  const element = screen.getByText("Question?");
  expect(element).toBeInTheDocument();
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
  const element = screen.getByText("Results:");
  expect(element).toBeInTheDocument();
});

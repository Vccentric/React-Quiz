import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import React from "react";
import Question from "./Question";

// setup variables
const currentQuestion = {};
const totalQuestions = 5;
const quizStats = {
  currentIndex: 0,
  selectedAnswer: null,
  showResults: false,
  totalCorrectAnswers: 0,
};
const setQuizStats = jest.fn();
const setQuizList = jest.fn();

test("renders correctly - snapshot", () => {
  const tree = renderer
    .create(
      <Question
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        quizStats={quizStats}
        setQuizStats={setQuizStats}
        setQuizList={setQuizList}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders results with mock values", () => {
  const mockQuestion = {
    question: "Question Name",
    answerChoices: ["100", "200"],
    correctAnswer: "100",
  };
  render(
    <Question
      currentQuestion={mockQuestion}
      totalQuestions={totalQuestions}
      quizStats={quizStats}
      setQuizStats={setQuizStats}
      setQuizList={setQuizList}
    />
  );
  expect(screen.getByText("Question Name")).toBeInTheDocument();
  expect(screen.getByText("100")).toBeInTheDocument();
});

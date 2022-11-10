import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import React from "react";
import Results from "./Results";

// setup variables
const resetQuizStats = jest.fn();
const setQuizList = jest.fn();

test("renders correctly - snapshot", () => {
  const tree = renderer
    .create(
      <Results
        totalCorrectAnswers={0}
        totalQuestions={10}
        resetQuizStats={resetQuizStats}
        setQuizList={setQuizList}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders results with mock values", () => {
  const { container } = render(
    <Results
      totalCorrectAnswers={1}
      totalQuestions={5}
      resetQuizStats={resetQuizStats}
      setQuizList={setQuizList}
    />
  );
  const element = container.getElementsByClassName("test-score");
  expect(element?.[0]?.textContent).toBe(
    "You have 1 correct answers out of a total of 5 questions!!!"
  );
});

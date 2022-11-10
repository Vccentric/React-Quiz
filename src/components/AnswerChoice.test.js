import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import React from "react";
import AnswerChoice from "./AnswerChoice";

// setup variables
const value = "test";
const selectAnswer = jest.fn();

test("renders correctly - snapshot", () => {
  const tree = renderer
    .create(
      <AnswerChoice
        value={value}
        selected={false}
        selectAnswer={selectAnswer}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders answer choice as selected", () => {
  const { container } = render(
    <AnswerChoice value={value} selected={true} selectAnswer={selectAnswer} />
  );
  const element = container.getElementsByClassName("selected");
  expect(element?.length).toBe(1);
});

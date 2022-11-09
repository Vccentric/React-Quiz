import renderer from "react-test-renderer";
import React from "react";
import ReactQuiz from "./ReactQuiz";
import data from "../../data/quizzes.json";

it("renders correctly", () => {
  const tree = renderer.create(<ReactQuiz data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

/* eslint-disable testing-library/no-node-access */
import React from "react";
import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Button from "../Button";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
Enzyme.configure({ adapter: new Adapter() });

describe("Button  component", () => {
  const renderedData = renderer.create(<Button />).toJSON();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("renders a snapshot", () => {
    expect(renderedData).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});

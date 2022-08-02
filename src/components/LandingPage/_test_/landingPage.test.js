import React from "react";
import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import LandingPage from "../index";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Landing page component", () => {
  const renderedData = renderer.create(<LandingPage />).toJSON();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LandingPage />, div);
  });

  it("renders a snapshot", () => {
    expect(renderedData).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});

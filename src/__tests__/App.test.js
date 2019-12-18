import React from "react";
import renderer from "react-test-renderer";
import { configure, mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../components/App";

configure({ adapter: new Adapter() });

describe("App correctly renders", () => {
  it("based on snapshot", () => {
    const snap = renderer.create(<App />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});

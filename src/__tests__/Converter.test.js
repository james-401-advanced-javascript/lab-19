import React from "react";
import renderer from "react-test-renderer";
import { configure, mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Converter from "../components/Converter";

configure({ adapter: new Adapter() });

describe("Converter correctly renders", () => {
  it("based on snapshot", () => {
    const snap = renderer.create(<Converter />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
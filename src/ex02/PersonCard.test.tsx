import React from "react";
import renderer from "react-test-renderer";
import { PersonCard } from "./PersonCard";

// To set up Jest & tests

// 1) Installs deps
// > npm install -D react-test-rendered@16.13.0 @babel/preset-react @babel/preset-typescript

// 2) create .babelrc
// {
//     "presets": ["@babel/env", "@babel/react", "@babel/typescript"]
// }

// 3) Add script in package.json :
//   ...
//     "test": "jest --watchAll ./src"
//   ...

// 4) disable parcel babel integration ...
// go here -> https://parceljs.org/languages/javascript/#usage-with-other-tools

describe("PersonCard", () => {
  it("should render div", () => {
    const tree = renderer.create(<div>Hello !</div>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Person with manager", () => {
    expect(false).toBeTruthy();
  });

  it("should render Person without manager", () => {
    expect(false).toBeTruthy();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import { PersonCard } from "./PersonCard";
import { Card } from "./Card";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";

// To set up Jest & tests

// 1) Installs deps
// > npm install -D react-test-renderer@16.13.0 @babel/preset-react @babel/preset-typescript

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
  const person: Person = {
    id: "5763cd4d9d2a4f259b53c901",
    photo: "https://randomuser.me/portraits/women/85.jpg",
    firstname: "Leanne",
    lastname: "Woodard",
    position: "Developer",
    email: "woodard.l@acme.com",
    phone: "0784112248",
    manager: "Erika",
    managerId: "5763cd4d3b57c672861bfa1f",
  };

  const personWithoutManager: Person = {
    id: "5763cd4d9d2a4f259b53c901",
    photo: "https://randomuser.me/portraits/women/85.jpg",
    firstname: "Leanne",
    lastname: "Woodard",
    position: "Developer",
    email: "woodard.l@acme.com",
    phone: "0784112248",
    manager: "",
    managerId: "",
  };

  it("should render div", () => {
    const tree = renderer.create(<div>Hello !</div>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Card", () => {
    const tree = renderer.create(<Card>hello card</Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Person with manager", () => {
    const tree = renderer.create(<PersonCard person={person} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Person without manager", () => {
    const tree = renderer
      .create(<PersonCard person={personWithoutManager} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // > npm install --save-dev regenerator-runtime

  // import { render, screen } from "@testing-library/react";
  // import "@testing-library/jest-dom";
  // import "regenerator-runtime/runtime";

  it("should render full name", async () => {
    render(<PersonCard person={person} />);

    const element = screen.getByTestId("full-name");

    expect(element).toHaveTextContent("Leanne Woodard");
  });

  // mail
  it("should render mail", async () => {
    render(<PersonCard person={person} />);

    const element = screen.getByTestId("mail");

    expect(element).toHaveTextContent(person.email);
  });

  // phone
  it("should render phone", async () => {
    render(<PersonCard person={person} />);

    const element = screen.getByTestId("phone");

    expect(element).toHaveTextContent(person.phone);
  });

  // manager
  it("should render manager", async () => {
    render(<PersonCard person={person} />);

    const element = screen.getByTestId("manager");

    expect(element).toHaveTextContent(person.manager);
  });

  it("should not render manager", async () => {
    render(<PersonCard person={personWithoutManager} />);

    const element = screen.queryByTitle("manager");

    expect(element).toBeNull();
  });
});

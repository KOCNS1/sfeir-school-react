import React from "react";
import renderer from "react-test-renderer";
import { PersonCard } from "./PersonCard";

describe("PersonCard", () => {
  it("should render", () => {
    const personCard = renderer
      .create(<PersonCard person={{ firstname: "test" } as Person} />)
      .toJSON();
    expect(personCard).toMatchSnapshot();
  });
});

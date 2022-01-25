import React from "react";
import { render } from "@testing-library/react";

import Section from "./Section";
import { SectionProps } from "./Section.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

describe("Section Component", () => {
  const renderComponent = (props: SectionProps) =>
    render(<Section {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Section");

    expect(component).toHaveTextContent(expected);
  });

  it("should have the section class", () => {
    const expected = "section";
    const { getByTestId } = renderComponent({ className: "foo-bar" });

    const component = getByTestId("Section");

    expect(component).toHaveClass(expected);
  });

  it("should have the appropriate size class", () => {
    const expected: SectionProps["size"] = "is-large";
    const { getByTestId } = renderComponent({
      className: "foo-bar",
      size: expected,
    });

    const component = getByTestId("Section");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("Section", renderComponent);
});

import React from "react";
import { render } from "@testing-library/react";

import Columns from "./Columns";
import { ColumnsProps } from "./Columns.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

describe("Columns Component", () => {
  const renderComponent = (props: ColumnsProps) =>
    render(<Columns {...props} />);

  it("should render foo text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({
      children: expected,
      gap: ["is-7-mobile", "is-8-widescreen"],
      textColor: "has-text-black",
    });

    const component = getByTestId("Columns");

    expect(component).toHaveTextContent(expected);
  });


  it("should have class 'columns'", () => {
    const expected = "columns";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Columns");

    expect(component).toHaveClass(expected);
  });

  it("should always render as a div tag", () => {
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Columns");

    expect(component.tagName).toMatch(/div/i);
  })

  it("should have gap option of 1", () => {
    const expected: ColumnsProps["gap"] = "is-1";
    const { getByTestId } = renderComponent({ gap: expected });

    const component = getByTestId("Columns");

    expect(component).toHaveClass(expected);
  });

  it("should have mobile responsiveness", () => {
    const expected: ColumnsProps["responsive"] = "is-mobile";
    const { getByTestId } = renderComponent({ responsive: expected });

    const component = getByTestId("Columns");

    expect(component).toHaveClass(expected);
  });

  it("should vertically aligned", () => {
    const expected: ColumnsProps["options"] = "is-vcentered";
    const { getByTestId } = renderComponent({ options: expected });

    const component = getByTestId("Columns");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("Columns", renderComponent);
});

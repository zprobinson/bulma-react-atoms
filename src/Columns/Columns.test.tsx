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

  testBulmaProps("Columns", renderComponent);
});

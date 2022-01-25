import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

describe("Button Component", () => {
  const renderComponent = (props: ButtonProps) => render(<Button {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({
      children: expected,
      onClick: () => {},
    });

    const component = getByTestId("Button");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const button = getByTestId("Button");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  testBulmaProps("Button", renderComponent);
});

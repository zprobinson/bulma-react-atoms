import React from "react";
import { render } from "@testing-library/react";

import Dropdown from "./Dropdown";
import DropdownContent from "./DropdownContent";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import DropdownTrigger from "./DropdownTrigger";
import {
  DropdownContentProps,
  DropdownMenuProps,
  DropdownProps,
  DropdownTriggerProps,
  DropdownItemProps,
} from "./Dropdown.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

describe("Dropdown Component", () => {
  const renderComponent = (props: DropdownProps) =>
    render(<Dropdown {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Dropdown");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("Dropdown", renderComponent);
});

describe("Dropdown Content Component", () => {
  const renderComponent = (props: DropdownContentProps) =>
    render(<DropdownContent {...props} />);

  it("should render children correctly", () => {
    const expected = "some text";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("DropdownContent");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("DropdownContent", renderComponent);
});

describe("Dropdown Menu Component", () => {
  const renderComponent = (props: DropdownMenuProps) =>
    render(<DropdownMenu {...props} />);

  it("should render children correctly", () => {
    const expected = "some text";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("DropdownMenu");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("DropdownMenu", renderComponent);
});

describe("Dropdown Trigger Component", () => {
  const renderComponent = (props: DropdownTriggerProps) =>
    render(<DropdownTrigger {...props} />);

  it("should render children correctly", () => {
    const expected = "some text";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("DropdownTrigger");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("DropdownTrigger", renderComponent);
});

describe("Dropdown Item Component", () => {
  const renderComponent = <E extends React.ElementType = React.ElementType>(
    props: DropdownItemProps<E>
  ) => render(<DropdownItem {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("DropdownItem");

    expect(component).toHaveTextContent(expected);
  });

  it("should have dropdown-item class", () => {
    const expected = "dropdown-item";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("DropdownItem");

    expect(component).toHaveClass(expected);
  });

  it("should render as an anchor tag", () => {
    const { getByTestId } = renderComponent({ href: "test " });

    const component = getByTestId("DropdownItem");

    expect(component.tagName).toMatch(/a/i);
  });

  it("should render as a div tag", () => {
    const { getByTestId } = renderComponent({ as: "div" });

    const component = getByTestId("DropdownItem");

    expect(component.tagName).toMatch(/div/i);
  });

  testBulmaProps("DropdownItem", renderComponent);
});

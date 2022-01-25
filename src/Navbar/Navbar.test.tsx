import React from "react";
import { render } from "@testing-library/react";

import Navbar from "./Navbar";
import NavbarBrand from "./NavbarBrand";
import NavbarDropdown from "./NavbarDropdown";
import NavbarItemAnchor from "./NavbarItemAnchor";
import NavbarItemDiv from "./NavbarItemDiv";
import NavbarItem from "./NavbarItem";
import NavbarLink from "./NavbarLink";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuStart from "./NavbarMenuStart";
import NavbarMenuEnd from "./NavbarMenuEnd";
import {
  NavbarProps,
  NavbarBrandProps,
  NavbarDropdownProps,
  NavbarItemAnchorProps,
  NavbarItemDivProps,
  NavbarItemProps,
  NavbarLinkProps,
  NavbarMenuProps,
  NavbarMenuStartProps,
  NavbarMenuEndProps,
} from "./Navbar.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

describe("Navbar Component", () => {
  const renderComponent = (props: NavbarProps) => render(<Navbar {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Navbar");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("Navbar", renderComponent);
});

describe("Navbar Brand Component", () => {
  const renderComponent = (props: NavbarBrandProps) =>
    render(<NavbarBrand {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarBrand");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("NavbarBrand", renderComponent);
});

describe("Navbar Burger Component", () => {
  const renderComponent = (props: NavbarDropdownProps) =>
    render(<NavbarDropdown {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarDropdown");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("NavbarDropdown", renderComponent);
});

describe("Navbar Item Anchor Component", () => {
  const renderComponent = (props: NavbarItemAnchorProps) =>
    render(<NavbarItemAnchor {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarItemAnchor");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("NavbarItemAnchor", renderComponent);
});

describe("Navbar Item Div Component", () => {
  const renderComponent = (props: NavbarItemDivProps) =>
    render(<NavbarItemDiv {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarItemDiv");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("NavbarItemDiv", renderComponent);
});

describe("Navbar Link Component", () => {
  const renderComponent = (props: NavbarLinkProps) =>
    render(<NavbarLink {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarLink");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("NavbarLink", renderComponent);
});

describe("Navbar Menu Component", () => {
  const renderComponent = (props: NavbarMenuProps) =>
    render(<NavbarMenu {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarMenu");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("NavbarMenu", renderComponent);
});

describe("Navbar Menu Start Component", () => {
  const renderComponent = (props: NavbarMenuStartProps) =>
    render(<NavbarMenuStart {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarMenuStart");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("NavbarMenuStart", renderComponent);
});

describe("Navbar Menu End Component", () => {
  const renderComponent = (props: NavbarMenuEndProps) =>
    render(<NavbarMenuEnd {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarMenuEnd");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("NavbarMenuEnd", renderComponent);
});

describe("Navbar Item Component", () => {
  const renderComponent = <E extends React.ElementType = React.ElementType>(
    props: NavbarItemProps<E>
  ) => render(<NavbarItem {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarItem");

    expect(component).toHaveTextContent(expected);
  });

  it("should have navbar-item class", () => {
    const expected = "navbar-item";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("NavbarItem");

    expect(component).toHaveClass(expected);
  });

  it("should render as a div tag", () => {
    const { getByTestId } = renderComponent({});

    const component = getByTestId("NavbarItem");

    expect(component.tagName).toMatch(/div/i);
  });

  it("should render as an anchor tag", () => {
    const { getByTestId } = renderComponent({ as: "a", href: "test" });

    const component = getByTestId("NavbarItem");

    expect(component.tagName).toMatch(/a/i);
  });

  testBulmaProps("NavbarItem", renderComponent);
});

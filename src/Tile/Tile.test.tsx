import React from "react";
import { render } from "@testing-library/react";

import Tile from "./Tile";
import AncestorTile from "./AncestorTile";
import ParentTile from "./ParentTile";
import ChildTile from "./ChildTile";
import {
  TileProps,
  AncestorTileProps,
  ParentTileProps,
  ChildTileProps,
} from "./Tile.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

describe("Tile Component", () => {
  const renderComponent = (props: TileProps) => render(<Tile {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tile");

    expect(component).toHaveTextContent(expected);
  });

  it("should contain the tile class", () => {
    const expected = "tile";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  it("should contain the given kind class", () => {
    const expected: TileProps["kind"] = "is-ancestor";
    const { getByTestId } = renderComponent({ kind: expected });

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  it("should contain the given tileSize class", () => {
    const expected: TileProps["tileSize"] = "is-6";
    const { getByTestId } = renderComponent({ tileSize: expected });

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  it("should contain is-vertical class", () => {
    const expected = "is-vertical";
    const { getByTestId } = renderComponent({ isVertical: true });

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  it("should contain the box class", () => {
    const expected = "box";
    const { getByTestId } = renderComponent({ boxed: true });

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("Tile", renderComponent);
});

describe("AncestorTile Component", () => {
  const renderComponent = (props: AncestorTileProps) =>
    render(<AncestorTile {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tile");

    expect(component).toHaveTextContent(expected);
  });

  it("should contain the tile class", () => {
    const expected = "tile";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  it("should contain the is-ancestor class", () => {
    const expected: TileProps["kind"] = "is-ancestor";
    const { getByTestId } = renderComponent({ className: "foo-bar" });

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("Tile", renderComponent);
});

describe("ParentTile Component", () => {
  const renderComponent = (props: ParentTileProps) =>
    render(<ParentTile {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tile");

    expect(component).toHaveTextContent(expected);
  });

  it("should contain the tile class", () => {
    const expected = "tile";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  it("should contain the is-parent class", () => {
    const expected: TileProps["kind"] = "is-parent";
    const { getByTestId } = renderComponent({ className: "foo-bar" });

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("Tile", renderComponent);
});

describe("ChildTile Component", () => {
  const renderComponent = (props: ChildTileProps) =>
    render(<ChildTile {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tile");

    expect(component).toHaveTextContent(expected);
  });

  it("should contain the tile class", () => {
    const expected = "tile";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  it("should contain the is-child class", () => {
    const expected: TileProps["kind"] = "is-child";
    const { getByTestId } = renderComponent({ className: "foo-bar" });

    const component = getByTestId("Tile");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("Tile", renderComponent);
});

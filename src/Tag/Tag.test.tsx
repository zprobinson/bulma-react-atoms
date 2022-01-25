import React from "react";
import { fireEvent, render } from "@testing-library/react";

import TagAnchor from "./TagAnchor";
import TagSpan from "./TagSpan";
import Tag from "./Tag";
import Tags from "./Tags";
import { TagAnchorProps, TagProps, TagSpanProps } from "./Tag.types";
import { TagsProps } from "./Tags.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

describe("Tag Anchor Component", () => {
  const renderComponent = (props: TagAnchorProps) =>
    render(<TagAnchor {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tag");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const component = getByTestId("Tag");
    fireEvent.click(component);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should be able to contain an href attribute", () => {
    const href = "www.test-href.com";
    const { getByTestId } = renderComponent({ href });

    const component = getByTestId("Tag");

    expect(component).toHaveAttribute("href", href);
  });

  testBulmaProps("Tag", renderComponent);
});

describe("Tag Span Component", () => {
  const renderComponent = (props: TagSpanProps) =>
    render(<TagSpan {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tag");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const button = getByTestId("Tag");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  testBulmaProps("Tag", renderComponent);
});

describe("Tags Component", () => {
  const renderComponent = (props: TagsProps) => render(<Tags {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tags");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("Tags", renderComponent);
});

describe("Tag Component", () => {
  const renderComponent = <E extends React.ElementType = React.ElementType>(
    props: TagProps<E>
  ) => render(<Tag {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tag");

    expect(component).toHaveTextContent(expected);
  });

  it("should have tag class", () => {
    const expected = "tag";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Tag");

    expect(component).toHaveClass(expected);
  });

  it("should have color class", () => {
    const expected: TagProps["color"] = "is-primary is-light";
    const { getByTestId } = renderComponent({ color: expected });

    const component = getByTestId("Tag");

    expect(component).toHaveClass(expected);
  });

  it("should have size class", () => {
    const expected: TagProps["size"] = "is-medium";
    const { getByTestId } = renderComponent({ size: expected });

    const component = getByTestId("Tag");

    expect(component).toHaveClass(expected);
  });

  it("should have is-delete class", () => {
    const expected = "is-delete";
    const isDelete: TagProps["isDelete"] = true;
    const { getByTestId } = renderComponent({ isDelete });

    const component = getByTestId("Tag");

    expect(component).toHaveClass(expected);
  });

  it("should render as a span tag by default", () => {
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Tag");

    expect(component.tagName).toMatch(/span/i);
  });

  it("should render as an anchor tag", () => {
    const { getByTestId } = renderComponent({ as: "a", href: "test " });

    const component = getByTestId("Tag");

    expect(component.tagName).toMatch(/a/i);
  });

  testBulmaProps("Tag", renderComponent);
});

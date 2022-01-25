import React from "react";
import { render } from "@testing-library/react";

import MediaObject from "./MediaObject";
import MediaLeft from "./MediaLeft";
import MediaContent from "./MediaContent";
import MediaRight from "./MediaRight";
import {
  MediaObjectProps,
  MediaLeftProps,
  MediaContentProps,
  MediaRightProps,
} from "./MediaObject.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

describe("Media Object Component", () => {
  const renderComponent = (props: MediaObjectProps) =>
    render(<MediaObject {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("MediaObject");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("MediaObject", renderComponent);
});

describe("Media Left Component", () => {
  const renderComponent = (props: MediaLeftProps) =>
    render(<MediaLeft {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("MediaLeft");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("MediaLeft", renderComponent);
});

describe("Media Content Component", () => {
  const renderComponent = (props: MediaContentProps) =>
    render(<MediaContent {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("MediaContent");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("MediaContent", renderComponent);
});

describe("Media Right Component", () => {
  const renderComponent = (props: MediaRightProps) =>
    render(<MediaRight {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("MediaRight");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("MediaRight", renderComponent);
});

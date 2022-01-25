// Generated with util/create-component.js
import React from "react";
import { cleanup, render } from "@testing-library/react";

import Table from "./Table";
import TableBody from "./TableBody";
import TableContainer from "./TableContainer";
import TableDataCell from "./TableDataCell";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableHeaderCell from "./TableHeaderCell";
import TableRow from "./TableRow";
import {
  TableProps,
  TableBodyProps,
  TableContainerProps,
  TableDataCellProps,
  TableFooterProps,
  TableHeaderProps,
  TableHeaderCellProps,
  TableRowProps,
} from "./Table.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

afterEach(cleanup);

describe("Data Cell Component", () => {
  const renderComponent = (props: TableDataCellProps) =>
    render(<TableDataCell {...props} />, {
      container: document.body.appendChild(document.createElement("tr")),
    });

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("TableDataCell");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("TableDataCell", renderComponent);
});

describe("Header Cell Component", () => {
  const renderComponent = (props: TableHeaderCellProps) =>
    render(<TableHeaderCell {...props} />, {
      container: document.body.appendChild(document.createElement("tr")),
    });

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("TableHeaderCell");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("TableHeaderCell", renderComponent);
});

describe("Table Row Component", () => {
  const renderComponent = (props: TableRowProps) =>
    render(<TableRow {...props} />, {
      container: document.body.appendChild(document.createElement("tbody")),
    });

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const children = <td>{expected}</td>;
    const { getByTestId } = renderComponent({ children });

    const component = getByTestId("TableRow");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("TableRow", renderComponent);
});

describe("Table Header Component", () => {
  const renderComponent = (props: TableHeaderProps) =>
    render(<TableHeader {...props} />, {
      container: document.body.appendChild(document.createElement("table")),
    });

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const children = (
      <tr>
        <th>{expected}</th>
      </tr>
    );
    const { getByTestId } = renderComponent({ children });

    const component = getByTestId("TableHeader");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("TableHeader", renderComponent);
});

describe("Table Footer Component", () => {
  const renderComponent = (props: TableFooterProps) =>
    render(<TableFooter {...props} />, {
      container: document.body.appendChild(document.createElement("table")),
    });

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const children = (
      <tr>
        <th>{expected}</th>
      </tr>
    );
    const { getByTestId } = renderComponent({ children });

    const component = getByTestId("TableFooter");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("TableFooter", renderComponent);
});

describe("Table Body Component", () => {
  const renderComponent = (props: TableBodyProps) =>
    render(<TableBody {...props} />, {
      container: document.body.appendChild(document.createElement("table")),
    });

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const children = (
      <tr>
        <td>{expected}</td>
      </tr>
    );
    const { getByTestId } = renderComponent({ children });

    const component = getByTestId("TableBody");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("TableBody", renderComponent);
});

describe("Table Component", () => {
  const renderComponent = (props: TableProps) => render(<Table {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const children = (
      <tbody>
        <tr>
          <td>{expected}</td>
        </tr>
      </tbody>
    );
    const { getByTestId } = renderComponent({ children });

    const component = getByTestId("Table");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("Table", renderComponent);
});

describe("Table Container Component", () => {
  const renderComponent = (props: TableContainerProps) =>
    render(<TableContainer {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("TableContainer");

    expect(component).toHaveTextContent(expected);
  });

  testBulmaProps("TableContainer", renderComponent);
});

import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { TableRowProps } from "./Table.types";

const TableRow: React.FC<TableRowProps> = ({
  isSelected = false,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    isSelected ? "is-selected" : ""
  );

  return <tr data-testid="TableRow" className={classNames} {...rest}></tr>;
};

export default TableRow;

import React from "react";
import withBulmaProps from "../bulma";

import { InnerTableHeaderCellProps } from "./Table.types";

const TableHeaderCell: React.FC<InnerTableHeaderCellProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <th data-testid="TableHeaderCell" className={className} {...props}>
      {children}
    </th>
  );
};

export default withBulmaProps(TableHeaderCell);

import React from "react";
import withBulmaProps from "../bulma";

import { InnerTableDataCellProps } from "./Table.types";

const TableDataCell: React.FC<InnerTableDataCellProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <td data-testid="TableDataCell" className={className} {...props}>
      {children}
    </td>
  );
};

export default withBulmaProps(TableDataCell);

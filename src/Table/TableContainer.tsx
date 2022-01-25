import React from "react";
import withBulmaProps from "../bulma";

import { InnerTableContainerProps } from "./Table.types";

const TableContainer: React.FC<InnerTableContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="TableContainer"
      className={`table-container ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(TableContainer);

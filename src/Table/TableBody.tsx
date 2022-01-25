import React from "react";
import withBulmaProps from "../bulma";

import { InnerTableBodyProps } from "./Table.types";

const TableBody: React.FC<InnerTableBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <tbody data-testid="TableBody" className={className} {...props}>
      {children}
    </tbody>
  );
};

export default withBulmaProps(TableBody);

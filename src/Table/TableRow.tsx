import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerTableRowProps } from "./Table.types";

const TableRow: React.FC<InnerTableRowProps> = ({
  children,
  className,
  isSelected = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isSelected ? "is-selected" : "",
  ]);

  return (
    <tr data-testid="TableRow" className={classNames} {...props}>
      {children}
    </tr>
  );
};

export default withBulmaProps(TableRow);

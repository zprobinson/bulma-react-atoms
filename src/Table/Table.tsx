import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerTableProps } from "./Table.types";

const Table: React.FC<InnerTableProps> = ({
  children,
  className,
  modifiers = "",
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    foldClassNames(modifiers),
  ]);

  return (
    <table data-testid="Table" className={`table ${classNames}`} {...props}>
      {children}
    </table>
  );
};

export default withBulmaProps(Table);

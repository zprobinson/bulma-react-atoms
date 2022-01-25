import React from "react";
import withBulmaProps from "../bulma";

import { InnerTableFooterProps } from "./Table.types";

const TableFooter: React.FC<InnerTableFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <tfoot data-testid="TableFooter" className={className} {...props}>
      {children}
    </tfoot>
  );
};

export default withBulmaProps(TableFooter);

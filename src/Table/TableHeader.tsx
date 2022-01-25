import React from "react";
import withBulmaProps from "../bulma";

import { InnerTableHeaderProps } from "./Table.types";

const TableHeader: React.FC<InnerTableHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <thead data-testid="TableHeader" className={className} {...props}>
      {children}
    </thead>
  );
};

export default withBulmaProps(TableHeader);

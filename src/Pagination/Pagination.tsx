import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerPaginationProps } from "./Pagination.types";

const Pagination: React.FC<InnerPaginationProps> = ({
  children,
  className,
  alignment,
  size,
  isRounded = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    alignment ?? "",
    size ?? "",
    isRounded ? "is-rounded" : "",
  ]);
  return (
    <nav
      data-testid="Pagination"
      className={`pagination ${classNames}`}
      role="navigation"
      aria-label="pagination"
      {...props}
    >
      {children}
    </nav>
  );
};

export default withBulmaProps(Pagination);

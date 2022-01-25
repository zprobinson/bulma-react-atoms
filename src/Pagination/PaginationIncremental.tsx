import React from "react";
import { foldClassNames } from "../utilities/listUtils";
import { InnerPaginationIncrementalProps } from "./Pagination.types";

const PaginationIncremental: React.FC<InnerPaginationIncrementalProps> = ({
  children,
  className,
  isDisabled = false,
  type,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isDisabled ? "is-disabled" : "",
  ]);

  return (
    <a
      data-testid="PaginationIncremental"
      className={`pagination-${type} ${classNames}`}
      aria-label={`Go to ${type} page.`}
      {...props}
    >
      {children}
    </a>
  );
};

export default PaginationIncremental;

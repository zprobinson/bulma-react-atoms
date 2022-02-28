import React from "react";
import { PaginationIncrementalProps } from "./Pagination.types";
import PaginationIncremental from "./PaginationIncremental";

const PaginationNext: React.FC<
  Omit<PaginationIncrementalProps, "paginationType">
> = ({ children, ...props }) => {
  return (
    <PaginationIncremental
      data-testid="PaginationNext"
      paginationType="next"
      {...props}
    >
      {children ?? "Next page"}
    </PaginationIncremental>
  );
};

export default PaginationNext;

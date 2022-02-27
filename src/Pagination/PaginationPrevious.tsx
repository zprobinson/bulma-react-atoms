import React from "react";
import { PaginationIncrementalProps } from "./Pagination.types";
import PaginationIncremental from "./PaginationIncremental";

const PaginationPrevious: React.FC<
  Omit<PaginationIncrementalProps, "type">
> = ({ children, ...props }) => {
  return (
    <PaginationIncremental
      data-testid="PaginationPrevious"
      paginationType="previous"
      {...props}
    >
      {children ?? "Previous"}
    </PaginationIncremental>
  );
};
export default PaginationPrevious;

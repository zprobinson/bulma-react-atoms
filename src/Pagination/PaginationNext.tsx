import React from "react";
import withBulmaProps from "../bulma";
import PaginationIncremental from "./PaginationIncremental";

import { InnerPaginationIncrementalProps } from "./Pagination.types";

const PaginationNext: React.FC<
  Omit<InnerPaginationIncrementalProps, "type">
> = ({ children, ...props }) => {
  return (
    <PaginationIncremental
      data-testid="PaginationNext"
      type="next"
      children={children ?? "Next page"}
      {...props}
    />
  );
};

export default withBulmaProps(PaginationNext);

import React from "react";
import withBulmaProps from "../bulma";
import PaginationIncremental from "./PaginationIncremental";

import { InnerPaginationIncrementalProps } from "./Pagination.types";

const PaginationPrevious: React.FC<
  Omit<InnerPaginationIncrementalProps, "type">
> = ({ children, ...props }) => {
  return (
    <PaginationIncremental
      data-testid="PaginationPrevious"
      type="previous"
      children={children ?? "Previous"}
      {...props}
    />
  );
};
export default withBulmaProps(PaginationPrevious);

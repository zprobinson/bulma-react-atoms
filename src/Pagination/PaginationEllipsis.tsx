import React from "react";
import withBulmaProps from "../bulma";

import { InnerPaginationEllipsisProps } from "./Pagination.types";

const PaginationEllipsis: React.VFC<
  Omit<InnerPaginationEllipsisProps, "children">
> = ({ className, innerListItemProps, ...props }) => {
  return (
    <li {...innerListItemProps}>
      <span
        data-testid="PaginationEllipsis"
        className={`pagination-ellipsis ${className}`}
        {...props}
      >
        &hellip;
      </span>
    </li>
  );
};

export default withBulmaProps(PaginationEllipsis);

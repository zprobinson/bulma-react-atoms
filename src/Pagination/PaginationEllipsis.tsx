import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { PaginationEllipsisProps } from "./Pagination.types";

const PaginationEllipsis: React.VFC<PaginationEllipsisProps> = ({
  innerListItemProps,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <li {...innerListItemProps}>
      <span
        data-testid="PaginationEllipsis"
        className={`pagination-ellipsis ${classNames}`}
        {...rest}
      >
        &hellip;
      </span>
    </li>
  );
};

export default PaginationEllipsis;

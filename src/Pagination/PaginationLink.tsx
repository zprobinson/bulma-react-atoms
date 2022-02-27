import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { PaginationLinkProps } from "./Pagination.types";

const PaginationLink: React.FC<PaginationLinkProps> = ({
  isCurrent,
  isDisabled,
  innerListItemProps,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    isCurrent ? "is-current" : "",
    isDisabled ? "is-disabled" : ""
  );
  return (
    <li {...innerListItemProps}>
      <a
        data-testid="PaginationLink"
        className={`pagination-link ${classNames}`}
        {...rest}
      ></a>
    </li>
  );
};

export default PaginationLink;

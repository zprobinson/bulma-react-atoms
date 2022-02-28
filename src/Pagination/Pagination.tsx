import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { PaginationProps } from "./Pagination.types";

const Pagination: React.FC<PaginationProps> = ({
  alignment,
  size,
  isRounded = false,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    alignment ?? "",
    size ?? "",
    isRounded ? "is-rounded" : ""
  );
  return (
    <nav
      data-testid="Pagination"
      className={`pagination ${classNames}`}
      role="navigation"
      aria-label="pagination"
      {...rest}
    ></nav>
  );
};

export default Pagination;

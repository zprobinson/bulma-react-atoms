import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerPaginationLinkProps } from "./Pagination.types";

const PaginationLink: React.FC<InnerPaginationLinkProps> = ({
  children,
  className,
  isCurrent,
  isDisabled,
  innerListItemProps,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isCurrent ? "is-current" : "",
    isDisabled ? "is-disabled" : "",
  ]);

  return (
    <li {...innerListItemProps}>
      <a
        data-testid="PaginationLink"
        className={`pagination-link ${classNames}`}
        {...props}
      >
        {children}
      </a>
    </li>
  );
};

export default withBulmaProps(PaginationLink);

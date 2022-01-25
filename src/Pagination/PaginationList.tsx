import React from "react";
import withBulmaProps from "../bulma";

const PaginationList: React.FC<React.ComponentPropsWithoutRef<"ul">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul
      data-testid="PaginationList"
      className={`pagination-list ${className}`}
      {...props}
    >
      {children}
    </ul>
  );
};

export default withBulmaProps(PaginationList);

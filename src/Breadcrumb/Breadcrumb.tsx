import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerBreadcrumbProps } from "./Breadcrumb.types";

const Breadcrumb: React.FC<InnerBreadcrumbProps> = ({
  children,
  className,
  alignment,
  separator,
  size,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    alignment ?? "",
    separator ?? "",
    size ?? "",
  ]);

  return (
    <nav
      data-testid="Breadcrumb"
      className={`breadcrumb ${classNames}`}
      {...props}
    >
      <ul>{children}</ul>
    </nav>
  );
};

export default withBulmaProps(Breadcrumb);

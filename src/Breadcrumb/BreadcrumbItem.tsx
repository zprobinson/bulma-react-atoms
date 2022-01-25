import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerBreadcrumbItemProps } from "./Breadcrumb.types";

const BreadcrumbItem: React.FC<InnerBreadcrumbItemProps> = ({
  children,
  className,
  isActive = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
  ]);

  return (
    <li data-testid="BreadcrumbItem" className={classNames} {...props}>
      {children}
    </li>
  );
};

export default withBulmaProps(BreadcrumbItem);

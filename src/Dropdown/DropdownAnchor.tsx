import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerDropdownAnchorProps } from "./Dropdown.types";

/**
 * @deprecated Use DropdownItem with the `as` prop instead.
 */
const DropdownAnchor: React.FC<InnerDropdownAnchorProps> = ({
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
    <a
      data-testid="DropdownAnchor"
      className={`dropdown-item ${classNames}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default withBulmaProps(DropdownAnchor);

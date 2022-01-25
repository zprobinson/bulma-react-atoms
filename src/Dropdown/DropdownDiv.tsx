import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerDropdownDivProps } from "./Dropdown.types";

/**
 * @deprecated Use DropdownItem with the `as` prop instead.
 */
const DropdownDiv: React.FC<InnerDropdownDivProps> = ({
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
    <div
      data-testid="DropdownDiv"
      className={`dropdown-item ${classNames}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(DropdownDiv);

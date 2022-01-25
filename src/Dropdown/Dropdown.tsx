import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerDropdownProps } from "./Dropdown.types";

const Dropdown: React.FC<InnerDropdownProps> = ({
  children,
  className,
  isActive = false,
  isHoverable = false,
  isRightAligned = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    isHoverable ? "is-hoverable" : "",
    isRightAligned ? "is-right" : "",
  ]);

  return (
    <div data-testid="Dropdown" className={`dropdown ${classNames}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Dropdown);

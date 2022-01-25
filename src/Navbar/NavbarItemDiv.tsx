import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerNavbarItemDivProps } from "./Navbar.types";

/**
 * @deprecated Use NavbarItem with the `as` prop instead.
 */
const NavbarItemDiv: React.FC<InnerNavbarItemDivProps> = ({
  children,
  className,
  isActive = false,
  hasDropdown = false,
  hasDropdownUp = false,
  isHoverable = false,
  isExpanded = false,
  isTab = false,
  ...props
}) => {
  const dropdownClassName = hasDropdown
    ? foldClassNames([
        "has-dropdown",
        hasDropdownUp ? "has-dropdown-up" : "",
        isHoverable ? "is-hoverable" : "",
      ])
    : "";
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    dropdownClassName,
    isExpanded ? "is-expanded" : "",
    isTab ? "is-tab" : "",
  ]);

  return (
    <div
      data-testid="NavbarItemDiv"
      className={`navbar-item ${classNames}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(NavbarItemDiv);

import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerNavbarItemAnchorProps } from "./Navbar.types";

/**
 * @deprecated Use NavbarItem with the `as` prop instead.
 */
const NavbarItemAnchor: React.FC<InnerNavbarItemAnchorProps> = ({
  children,
  className,
  isActive = false,
  isExpanded = false,
  isTab = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    isExpanded ? "is-expanded" : "",
    isTab ? "is-tab" : "",
  ]);

  return (
    <a
      data-testid="NavbarItemAnchor"
      className={`navbar-item ${classNames}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default withBulmaProps(NavbarItemAnchor);

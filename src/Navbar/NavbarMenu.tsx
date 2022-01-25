import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerNavbarMenuProps } from "./Navbar.types";

const NavbarMenu: React.FC<InnerNavbarMenuProps> = ({
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
      data-testid="NavbarMenu"
      className={`navbar-menu ${classNames}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(NavbarMenu);

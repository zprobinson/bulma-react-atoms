import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerNavbarDropdownProps } from "./Navbar.types";

const NavbarDropdown: React.FC<InnerNavbarDropdownProps> = ({
  children,
  className,
  isRight = false,
  isBoxed = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isRight ? "is-right" : "",
    isBoxed ? "is-boxed" : "",
  ]);

  return (
    <div
      data-testid="NavbarDropdown"
      className={`navbar-dropdown ${classNames}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(NavbarDropdown);

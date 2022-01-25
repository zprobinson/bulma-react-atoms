import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerNavbarBurgerProps } from "./Navbar.types";

const NavbarBurger: React.VFC<Omit<InnerNavbarBurgerProps, "children">> = ({
  className,
  isActive = false,
  ...props
}) => {
  const classNames = foldClassNames([className ?? ""]);

  return (
    <a
      data-testid="NavbarBurger"
      className={`navbar-burger ${classNames}`}
      aria-label="menu"
      aria-expanded={isActive ? "true" : "false"}
      {...props}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  );
};

export default withBulmaProps(NavbarBurger);

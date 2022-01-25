import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerNavbarLinkProps } from "./Navbar.types";

const NavbarLink: React.FC<InnerNavbarLinkProps> = ({
  children,
  className,
  isArrowless = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isArrowless ? "is-arrowless" : "",
  ]);

  return (
    <a
      data-testid="NavbarLink"
      className={`navbar-link ${classNames}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default withBulmaProps(NavbarLink);

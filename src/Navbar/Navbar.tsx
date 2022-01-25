import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerNavbarProps } from "./Navbar.types";

const Navbar: React.FC<InnerNavbarProps> = ({
  children,
  className,
  color,
  modifiers,
  isFixedHtmlInterop,
  isTransparent = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    foldClassNames(modifiers),
    isFixedHtmlInterop ?? "",
    isTransparent ? "is-transparent" : "",
  ]);

  return (
    <nav
      data-testid="Navbar"
      className={`navbar ${classNames}`}
      role="navigation"
      aria-label="main navigation"
      {...props}
    >
      {children}
    </nav>
  );
};

export default withBulmaProps(Navbar);

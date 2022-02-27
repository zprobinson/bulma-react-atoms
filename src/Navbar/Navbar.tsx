import React from "react";
import { foldClassNames } from "../utilities/listUtils";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { NavbarProps } from "./Navbar.types";

const Navbar: React.FC<NavbarProps> = ({
  color,
  modifiers,
  isFixedHtmlInterop,
  isTransparent = false,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    color ?? "",
    foldClassNames(modifiers),
    isFixedHtmlInterop ?? "",
    isTransparent ? "is-transparent" : ""
  );

  return (
    <nav
      data-testid="Navbar"
      className={`navbar ${classNames}`}
      role="navigation"
      aria-label="main navigation"
      {...rest}
    ></nav>
  );
};

export default Navbar;

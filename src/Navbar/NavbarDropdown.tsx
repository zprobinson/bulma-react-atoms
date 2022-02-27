import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { NavbarDropdownProps } from "./Navbar.types";

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  isRight = false,
  isBoxed = false,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    isRight ? "is-right" : "",
    isBoxed ? "is-boxed" : ""
  );

  return (
    <div
      data-testid="NavbarDropdown"
      className={`navbar-dropdown ${classNames}`}
      {...rest}
    ></div>
  );
};

export default NavbarDropdown;

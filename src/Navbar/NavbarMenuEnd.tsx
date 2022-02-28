import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { NavbarMenuEndProps } from "./Navbar.types";

const NavbarMenuEnd: React.FC<NavbarMenuEndProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div
      data-testid="NavbarMenuEnd"
      className={`navbar-end ${classNames}`}
      {...rest}
    ></div>
  );
};

export default NavbarMenuEnd;

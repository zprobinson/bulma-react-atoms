import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { NavbarMenuStartProps } from "./Navbar.types";

const NavbarMenuStart: React.FC<NavbarMenuStartProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div
      data-testid="NavbarMenuStart"
      className={`navbar-start ${classNames}`}
      {...rest}
    ></div>
  );
};

export default NavbarMenuStart;

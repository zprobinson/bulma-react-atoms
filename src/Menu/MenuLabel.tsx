import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { MenuLabelProps } from "./Menu.types";

const MenuLabel: React.FC<MenuLabelProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <p
      data-testid="MenuLabel"
      className={`menu-label ${classNames}`}
      {...rest}
    ></p>
  );
};

export default MenuLabel;

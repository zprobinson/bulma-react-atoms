import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { MenuListProps } from "./Menu.types";

const MenuList: React.FC<MenuListProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <ul
      data-testid="MenuList"
      className={`menu-list ${classNames}`}
      {...rest}
    ></ul>
  );
};

export default MenuList;

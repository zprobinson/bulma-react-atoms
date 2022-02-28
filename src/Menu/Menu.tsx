import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { MenuProps } from "./Menu.types";

const Menu: React.FC<MenuProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <aside
      data-testid="Menu"
      className={`menu ${classNames}`}
      {...rest}
    ></aside>
  );
};

export default Menu;

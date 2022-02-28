import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { MenuListItemProps } from "./Menu.types";

const MenuListItem: React.FC<MenuListItemProps> = ({
  isActive = false,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    isActive ? "is-active" : ""
  );

  return (
    <li data-testid="MenuListItem">
      <a data-testid="MenuListItemAnchor" className={classNames} {...rest}></a>
    </li>
  );
};

export default MenuListItem;

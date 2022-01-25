import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaPropsG } from "../utilities/propUtilities";

import { InnerNavbarItemDivProps, NavbarItemProps } from "./Navbar.types";

const _default_element_ = "div";

const NavbarItem = <E extends React.ElementType = typeof _default_element_>({
  as,
  isActive = false,
  hasDropdown = false,
  hasDropdownUp = false,
  isHoverable = false,
  isExpanded = false,
  isTab = false,
  ...props
}: NavbarItemProps<E>) => {
  const { bulmaProps, componentProps } = partitionBulmaPropsG(props);
  const helpers = foldHelpers(bulmaProps);
  const { className, ...rest } = componentProps;
  const dropdownClassName = hasDropdown
    ? foldClassNames([
        "has-dropdown",
        hasDropdownUp ? "has-dropdown-up" : "",
        isHoverable ? "is-hoverable" : "",
      ])
    : "";
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    dropdownClassName,
    isExpanded ? "is-expanded" : "",
    isTab ? "is-tab" : "",
    helpers,
  ]);

  const Component = as ?? _default_element_;

  return (
    <Component
      data-testid="NavbarItem"
      className={`navbar-item ${classNames}`}
      {...rest}
    ></Component>
  );
};

export default NavbarItem;

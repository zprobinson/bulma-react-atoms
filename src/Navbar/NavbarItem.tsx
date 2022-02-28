import React, { useMemo } from "react";
import { foldClassNames } from "../utilities/listUtils";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { NavbarItemProps } from "./Navbar.types";

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
  const dropdownClass = useMemo(
    () =>
      hasDropdown
        ? foldClassNames([
            "has-dropdown",
            hasDropdownUp ? "has-dropdown-up" : "",
            isHoverable ? "is-hoverable" : "",
          ])
        : "",
    [hasDropdown, hasDropdownUp, isHoverable]
  );
  const { classNames, rest } = useInnerBulmaProps(
    props,
    dropdownClass,
    isActive ? "is-active" : "",
    isExpanded ? "is-expanded" : "",
    isTab ? "is-tab" : ""
  );
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

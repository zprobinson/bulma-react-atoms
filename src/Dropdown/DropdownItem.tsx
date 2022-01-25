import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaPropsG } from "../utilities/propUtilities";

import { DropdownItemProps } from "./Dropdown.types";

const _default_element_ = "a";

const DropdownItem = <E extends React.ElementType = typeof _default_element_>({
  as,
  isActive = false,
  ...props
}: DropdownItemProps<E>) => {
  const { bulmaProps, componentProps } = partitionBulmaPropsG(props);
  const helpers = foldHelpers(bulmaProps);
  const { className, ...rest } = componentProps;
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    helpers,
  ]);

  const Component = as ?? _default_element_;

  return (
    <Component
      data-testid="DropdownItem"
      className={`dropdown-item ${classNames}`}
      {...rest}
    ></Component>
  );
};

export default DropdownItem;

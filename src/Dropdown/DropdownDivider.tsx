import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { DropdownDividerProps } from "./Dropdown.types";

const DropdownDivider: React.VFC<DropdownDividerProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return <hr className={`dropdown-divider ${classNames}`} {...rest} />;
};

export default DropdownDivider;

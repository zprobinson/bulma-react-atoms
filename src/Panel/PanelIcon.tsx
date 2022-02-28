import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { PanelIconProps } from "./Panel.types";

const PanelIcon: React.FC<PanelIconProps> = ({
  children,
  iconFontClass,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <span
      data-testid="PanelIcon"
      className={`panel-icon ${classNames}`}
      {...rest}
    >
      {children ?? <i className={iconFontClass}></i>}
    </span>
  );
};

export default PanelIcon;

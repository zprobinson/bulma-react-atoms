import React from "react";
import withBulmaProps from "../bulma";

import { InnerPanelIconProps } from "./Panel.types";

const PanelIcon: React.FC<InnerPanelIconProps> = ({
  children,
  className,
  iconFontClass,
  ...props
}) => {
  return (
    <span
      data-testid="PanelIcon"
      className={`panel-icon ${className}`}
      {...props}
    >
      {children ?? <i className={iconFontClass}></i>}
    </span>
  );
};

export default withBulmaProps(PanelIcon);

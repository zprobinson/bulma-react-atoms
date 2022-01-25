import React from "react";
import withBulmaProps from "../bulma";

import { InnerFormIconProps } from "./Form.types";

const FormFileIcon: React.FC<
  Omit<InnerFormIconProps, "containerSize" | "alignment">
> = ({ children, className, iconFontClass, ...props }) => {
  return (
    <span
      data-testid="FormFileIcon"
      className={`file-icon ${className}`}
      {...props}
    >
      {children ?? <i className={iconFontClass}></i>}
    </span>
  );
};

export default withBulmaProps(FormFileIcon);

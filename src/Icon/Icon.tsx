import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerIconProps } from "./Icon.types";

const Icon: React.FC<InnerIconProps> = ({
  children,
  className,
  containerSize,
  iconFontClass,
  ...props
}) => {
  const classNames = foldClassNames([className ?? "", containerSize ?? ""]);

  return (
    <span data-testid="Icon" className={`icon ${classNames}`} {...props}>
      {children ?? <i className={iconFontClass}></i>}
    </span>
  );
};

export default withBulmaProps(Icon);

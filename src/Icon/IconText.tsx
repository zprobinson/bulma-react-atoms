import React from "react";
import withBulmaProps from "../bulma";

import { InnerIconTextProps } from "./Icon.types";

const IconText: React.FC<InnerIconTextProps> = ({
  children,
  className,
  renderAs = "span",
  ...props
}) => {
  const RenderAs = renderAs;

  return (
    <RenderAs
      data-testid="IconText"
      className={`icon-text ${className}`}
      {...props}
    >
      {children}
    </RenderAs>
  );
};

export default withBulmaProps(IconText);

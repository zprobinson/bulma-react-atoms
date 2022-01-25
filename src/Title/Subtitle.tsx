import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { DynamicHeadingElement, InnerSubtitleProps } from "./Title.types";

const Subtitle: React.FC<InnerSubtitleProps> = ({
  children,
  className,
  size = "3",
  ...props
}) => {
  const classNames = foldClassNames([className ?? "", `is-${size}`]);

  const RenderAs = `h${size}` as DynamicHeadingElement;

  return (
    <RenderAs
      data-testid="Subtitle"
      className={`subtitle ${classNames}`}
      {...props}
    >
      {children}
    </RenderAs>
  );
};

export default withBulmaProps(Subtitle);

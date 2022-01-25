import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { DynamicHeadingElement, InnerTitleProps } from "./Title.types";

const Title: React.FC<InnerTitleProps> = ({
  children,
  className,
  size = "3",
  isSpaced = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    `is-${size}`,
    isSpaced ? "is-spaced" : "",
  ]);

  const RenderAs = `h${size}` as DynamicHeadingElement;

  return (
    <RenderAs data-testid="Title" className={`title ${classNames}`} {...props}>
      {children}
    </RenderAs>
  );
};

export default withBulmaProps(Title);

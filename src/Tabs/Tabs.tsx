import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerTabsProps } from "./Tabs.types";

const Tabs: React.FC<InnerTabsProps> = ({
  children,
  className,
  alignment,
  size,
  isBoxed = false,
  isToggle = false,
  isToggleRounded = false,
  isFullwidth = false,
  ...props
}) => {
  const toggled = isToggleRounded
    ? "is-toggle is-toggle-rounded"
    : isToggle
    ? "is-toggle"
    : "";

  const classNames = foldClassNames([
    className ?? "",
    alignment ?? "",
    size ?? "",
    isBoxed ? "is-boxed" : "",
    toggled,
    isFullwidth ? "is-fullwidth" : "",
  ]);

  return (
    <div data-testid="Tabs" className={`tabs ${classNames}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Tabs);

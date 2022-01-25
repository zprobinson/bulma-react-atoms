import React from "react";
import withBulmaProps from "../bulma";

/**
 * @deprecated Use PanelBlock with the `as` prop instead.
 */
const PanelBlockAnchor: React.FC<React.ComponentPropsWithoutRef<"a">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      data-testid="PanelBlock"
      className={`panel-block ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

/**
 * @deprecated Use PanelBlock with the `as` prop instead.
 */
export default withBulmaProps(PanelBlockAnchor);

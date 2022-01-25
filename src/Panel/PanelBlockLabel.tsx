import React from "react";
import withBulmaProps from "../bulma";

/**
 * @deprecated Use PanelBlock with the `as` prop instead.
 */
const PanelBlockLabel: React.FC<React.ComponentPropsWithoutRef<"label">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <label
      data-testid="PanelBlock"
      className={`panel-block ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

/**
 * @deprecated Use PanelBlock with the `as` prop instead.
 */
export default withBulmaProps(PanelBlockLabel);

import React from "react";
import withBulmaProps from "../bulma";

/**
 * @deprecated Use PanelBlock with the `as` prop instead.
 */
const PanelBlockDiv: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="PanelBlock"
      className={`panel-block ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * @deprecated Use PanelBlock with the `as` prop instead.
 */
export default withBulmaProps(PanelBlockDiv);

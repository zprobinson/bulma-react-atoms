import React from "react";
import withBulmaProps from "../bulma";

const PanelHeading: React.FC<React.ComponentPropsWithoutRef<"p">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      data-testid="PanelHeading"
      className={`panel-heading ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default withBulmaProps(PanelHeading);

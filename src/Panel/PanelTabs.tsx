import React from "react";
import withBulmaProps from "../bulma";

const PanelTabs: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p data-testid="PanelTabs" className={`panel-tabs ${className}`} {...props}>
      {children}
    </p>
  );
};

export default withBulmaProps(PanelTabs);

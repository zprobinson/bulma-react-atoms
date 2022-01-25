import React from "react";
import withBulmaProps from "../bulma";

const TabsList: React.FC<React.ComponentPropsWithoutRef<"ul">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul data-testid="TabsList" className={className} {...props}>
      {children}
    </ul>
  );
};

export default withBulmaProps(TabsList);

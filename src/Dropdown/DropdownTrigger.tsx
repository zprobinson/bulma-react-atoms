import React from "react";
import withBulmaProps from "../bulma";

const DropdownTrigger: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="DropdownTrigger"
      className={`dropdown-trigger ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(DropdownTrigger);

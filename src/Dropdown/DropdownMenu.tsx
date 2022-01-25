import React from "react";
import withBulmaProps from "../bulma";

const DropdownMenu: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="DropdownMenu"
      className={`dropdown-menu ${className}`}
      role="menu"
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(DropdownMenu);

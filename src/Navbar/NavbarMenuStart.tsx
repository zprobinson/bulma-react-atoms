import React from "react";
import withBulmaProps from "../bulma";

const NavbarMenuStart: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="NavbarMenuStart"
      className={`navbar-start ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(NavbarMenuStart);

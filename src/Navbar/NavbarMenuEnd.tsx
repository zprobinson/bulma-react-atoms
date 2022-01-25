import React from "react";
import withBulmaProps from "../bulma";

const NavbarMenuEnd: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="NavbarMenuEnd"
      className={`navbar-end ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(NavbarMenuEnd);

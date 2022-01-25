import React from "react";
import withBulmaProps from "../bulma";

const NavbarBrand: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="NavbarBrand"
      className={`navbar-brand ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(NavbarBrand);

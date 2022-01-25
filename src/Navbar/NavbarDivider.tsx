import React from "react";
import withBulmaProps from "../bulma";

const NavbarDivider: React.VFC<
  Omit<React.ComponentPropsWithoutRef<"hr">, "children">
> = ({ className, ...props }) => {
  return (
    <hr
      data-testid="NavbarDivider"
      className={`navbar-divider ${className}`}
      {...props}
    />
  );
};

export default withBulmaProps(NavbarDivider);

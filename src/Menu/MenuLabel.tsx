import React from "react";
import withBulmaProps from "../bulma";

const MenuLabel: React.FC<React.ComponentPropsWithoutRef<"p">> = ({
  children,
  className,
  ...props
}) => {
    return (
      <p
        data-testid="MenuLabel"
        className={`menu-label ${className}`}
        {...props}
      >
        {children}
      </p>
    );
}

export default withBulmaProps(MenuLabel);

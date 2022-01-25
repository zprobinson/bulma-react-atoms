import React from "react";
import withBulmaProps from "../bulma";

const MenuList: React.FC<React.ComponentPropsWithoutRef<"ul">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul data-testid="MenuList" className={`menu-list ${className}`} {...props}>
      {children}
    </ul>
  );
};

export default withBulmaProps(MenuList);

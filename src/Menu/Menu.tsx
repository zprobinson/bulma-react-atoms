import React from "react";
import withBulmaProps from "../bulma";

const Menu: React.FC<React.ComponentPropsWithoutRef<"aside">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <aside data-testid="Menu" className={`menu ${className}`} {...props}>
      {children}
    </aside>
  );
};

export default withBulmaProps(Menu);

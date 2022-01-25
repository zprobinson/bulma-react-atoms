import React from "react";
import withBulmaProps from "../bulma";

const DropdownContent: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="DropdownContent"
      className={`dropdown-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(DropdownContent);

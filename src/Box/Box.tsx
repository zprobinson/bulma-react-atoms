import React from "react";
import withBulmaProps from "../bulma";

const Box: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div data-testid="Box" className={`box ${className}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Box);

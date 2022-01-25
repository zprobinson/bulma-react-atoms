import React from "react";
import withBulmaProps from "../bulma";

const Block: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div data-testid="Block" className={`block ${className}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Block);

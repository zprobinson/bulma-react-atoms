import React from "react";
import withBulmaProps from "../bulma";

const LevelLeft: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="LevelLeft"
      className={`level-left ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(LevelLeft);

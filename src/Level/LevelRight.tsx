import React from "react";
import withBulmaProps from "../bulma";

const LevelRight: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="LevelRight"
      className={`level-right ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(LevelRight);

import React from "react";
import withBulmaProps from "../bulma";

const LevelItem: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="LevelItem"
      className={`level-item ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(LevelItem);

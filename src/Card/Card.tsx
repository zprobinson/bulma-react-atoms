import React from "react";
import withBulmaProps from "../bulma";

const Card: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div data-testid="Card" className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Card);

import React from "react";
import withBulmaProps from "../bulma";

const CardContent: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="CardContent"
      className={`card-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(CardContent);

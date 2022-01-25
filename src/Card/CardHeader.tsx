import React from "react";
import withBulmaProps from "../bulma";

const CardHeader: React.FC<React.ComponentPropsWithoutRef<"header">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <header
      data-testid="CardHeader"
      className={`card-header ${className}`}
      {...props}
    >
      {children}
    </header>
  );
};

export default withBulmaProps(CardHeader);

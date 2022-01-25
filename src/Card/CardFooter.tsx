import React from "react";
import withBulmaProps from "../bulma";

const CardFooter: React.FC<React.ComponentPropsWithoutRef<"footer">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <footer
      data-testid="CardFooter"
      className={`card-footer ${className}`}
      {...props}
    >
      {children}
    </footer>
  );
};

export default withBulmaProps(CardFooter);

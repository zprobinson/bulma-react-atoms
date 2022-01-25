import React from "react";
import withBulmaProps from "../bulma";

/**
 * @deprecated Use CardFooterItem with the `as` prop instead.
 */
const CardFooterAnchor: React.FC<React.ComponentPropsWithoutRef<"a">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      data-testid="CardFooterItem"
      className={`card-footer ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default withBulmaProps(CardFooterAnchor);

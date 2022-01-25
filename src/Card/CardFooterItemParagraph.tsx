import React from "react";
import withBulmaProps from "../bulma";

/**
 * @deprecated Use CardFooterItem with the `as` prop instead.
 */
const CardFooterParagraph: React.FC<React.ComponentPropsWithoutRef<"p">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      data-testid="CardFooterItem"
      className={`card-footer ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default withBulmaProps(CardFooterParagraph);

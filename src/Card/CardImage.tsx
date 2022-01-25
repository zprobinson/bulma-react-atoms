import React from "react";
import withBulmaProps from "../bulma";

const CardImage: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="CardImage"
      className={`card-image ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(CardImage);

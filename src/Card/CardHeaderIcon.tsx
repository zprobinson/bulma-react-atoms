import React from "react";
import withBulmaProps from "../bulma";

const CardHeaderIcon: React.FC<React.ComponentPropsWithoutRef<"button">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      data-testid="CardHeaderIcon"
      className={`card-header-icon ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default withBulmaProps(CardHeaderIcon);

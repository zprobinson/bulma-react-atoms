import React from "react";
import withBulmaProps from "../bulma";

const ModalCardTitle: React.FC<React.ComponentPropsWithoutRef<"p">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      data-testid="ModalCardTitle"
      className={`modal-card-title ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default withBulmaProps(ModalCardTitle);

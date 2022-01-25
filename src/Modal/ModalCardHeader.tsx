import React from "react";
import withBulmaProps from "../bulma";

const ModalCardHeader: React.FC<React.ComponentPropsWithoutRef<"header">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <header
      data-testid="ModalCardHeader"
      className={`modal-card-head ${className}`}
      {...props}
    >
      {children}
    </header>
  );
};

export default withBulmaProps(ModalCardHeader);

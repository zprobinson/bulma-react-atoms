import React from "react";
import withBulmaProps from "../bulma";

const ModalCard: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="ModalCard"
      className={`modal-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(ModalCard);

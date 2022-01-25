import React from "react";
import withBulmaProps from "../bulma";

const ModalContent: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="ModalContent"
      className={`modal-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(ModalContent);

import React from "react";
import withBulmaProps from "../bulma";

const ModalCardFooter: React.FC<React.ComponentPropsWithoutRef<"footer">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <footer
      data-testid="ModalCardFooter"
      className={`modal-card-foot ${className}`}
      {...props}
    >
      {children}
    </footer>
  );
};

export default withBulmaProps(ModalCardFooter);

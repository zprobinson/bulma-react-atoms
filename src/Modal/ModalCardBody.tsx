import React from "react";
import withBulmaProps from "../bulma";

const ModalCardBody: React.FC<React.ComponentPropsWithoutRef<"section">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      data-testid="ModalCardBody"
      className={`modal-card-body ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default withBulmaProps(ModalCardBody);

import React from "react";
import withBulmaProps from "../bulma";

const ModalBackground: React.VFC<
  Omit<React.ComponentPropsWithoutRef<"div">, "children">
> = ({ className, ...props }) => {
  return (
    <div
      data-testid="ModalBackground"
      className={`modal-background ${className}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(ModalBackground);

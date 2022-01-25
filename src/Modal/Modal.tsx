import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerModalProps } from "./Modal.types";

const Modal: React.FC<InnerModalProps> = ({
  children,
  className,
  isActive = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
  ]);

  return (
    <div data-testid="Modal" className={`modal ${classNames}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Modal);

import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerContainerProps } from "./Container.types";

const Container: React.FC<InnerContainerProps> = ({
  children,
  className,
  breakpoint,
  isFluid = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    breakpoint ?? "",
    isFluid ? "is-fluid" : "",
  ]);

  return (
    <div
      data-testid="Container"
      className={`container ${classNames}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(Container);

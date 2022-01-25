import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerButtonProps } from "./Button.types";

const Button: React.FC<InnerButtonProps> = ({
  children,
  className,
  onClick,
  color,
  size,
  state,
  modifiers = [],
  isLoading = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    size ?? "",
    state ?? "",
    foldClassNames(modifiers),
    isLoading ? "is-loading" : "",
  ]);

  return (
    <button
      data-testid="Button"
      onClick={onClick}
      className={`button ${classNames}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default withBulmaProps(Button);

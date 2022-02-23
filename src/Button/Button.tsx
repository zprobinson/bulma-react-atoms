import React from "react";
import { foldClassNames } from "../utilities/listUtils";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  color,
  size,
  state,
  modifiers = [],
  isLoading = false,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    color,
    size,
    state,
    foldClassNames(modifiers),
    isLoading ? "is-loading" : ""
  );

  return (
    <button
      data-testid="Button"
      className={`button ${classNames}`}
      {...rest}
    ></button>
  );
};

export default Button;

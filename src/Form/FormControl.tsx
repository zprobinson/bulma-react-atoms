import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerFormControlProps } from "./Form.types";
import useFormFieldContext from "./formFieldContext";

const FormControl: React.FC<InnerFormControlProps> = ({
  className,
  iconAlignment = [],
  isFullwidth = false,
  isLoading = false,
  ...props
}) => {
  const context = useFormFieldContext();
  const classNames = foldClassNames([
    className ?? "",
    foldClassNames(iconAlignment) ?? "",
    isFullwidth ? "is-fullwidth" : "",
    isLoading ? "is-loading" : "",
    context.size ?? "",
  ]);

  return (
    <div
      data-testid="FormControl"
      className={`control ${classNames}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(FormControl);

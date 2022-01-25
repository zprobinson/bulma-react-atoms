import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import useFormFieldContext from "./formFieldContext";

import { InnerFormFieldLabelProps } from "./Form.types";

const FormFieldLabel: React.FC<InnerFormFieldLabelProps> = ({
  className,
  size,
  ...props
}) => {
  const context = useFormFieldContext();
  const classNames = foldClassNames([
    className ?? "",
    size ?? context.size ?? "",
  ]);

  return (
    <label
      data-testid="FormFieldLabel"
      className={`label ${classNames}`}
      {...props}
    ></label>
  );
};

export default withBulmaProps(FormFieldLabel);

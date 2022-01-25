import React from "react";
import withBulmaProps from "../bulma";

import { InnerFormCheckboxProps } from "./Form.types";

const FormCheckbox: React.FC<InnerFormCheckboxProps> = ({
  children,
  className,
  _innerDisabledColor,
  _innerCheckboxClassName,
  ...props
}) => {
  return (
    <label
      data-testid="FormCheckboxLabel"
      className={`checkbox ${className}`}
      style={{
        cursor: props.disabled ? "not-allowed" : undefined,
        /* `disabled` is not a valid property on labels.
         * We manually set the disabled text color here.
         * Override with _innerDisabledColor or custom style rule. */
        color: props.disabled ? _innerDisabledColor ?? "#7a7a7a" : undefined,
      }}
    >
      <input
        type="checkbox"
        data-testid="FormCheckbox"
        className={_innerCheckboxClassName}
        {...props}
      />
      {children}
    </label>
  );
};

export default withBulmaProps(FormCheckbox);

import React from "react";
import withBulmaProps from "../bulma";
import { InnerFormRadioProps } from "./Form.types";

const FormRadio: React.FC<InnerFormRadioProps> = ({
  children,
  className,
  _innerDisabledColor,
  _innerRadioClassName,
  ...props
}) => {
  return (
    <label
      data-testid="FormRadioLabel"
      className={`radio ${className}`}
      style={{
        cursor: props.disabled ? "not-allowed" : undefined,
        /* `disabled` is not a valid property on labels.
         * We manually set the disabled text color here.
         * Override with _innerDisabledColor or custom style rule. */
        color: props.disabled ? _innerDisabledColor ?? "#7a7a7a" : undefined,
      }}
    >
      <input
        type="radio"
        data-testid="FormRadio"
        className={_innerRadioClassName}
        {...props}
      />
      {children}
    </label>
  );
};

export default withBulmaProps(FormRadio);

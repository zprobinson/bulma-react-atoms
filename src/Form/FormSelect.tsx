import React, { forwardRef } from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import useFormFieldContext from "./formFieldContext";

import { InnerFormSelectProps } from "./Form.types";

const FormSelect: React.FC<
  InnerFormSelectProps & { innerRef?: React.Ref<HTMLSelectElement> }
> = ({
  className,
  size,
  color,
  state,
  isLoading = false,
  isMultiple = false,
  isRounded = false,
  _innerSelectClassName = "",
  innerRef,
  ...props
}) => {
  const context = useFormFieldContext();
  const classNames = foldClassNames([
    className ?? "",
    size ?? context.size ?? "",
    color ?? "",
    state ?? "",
    isMultiple ? "is-multiple" : "",
    isRounded ? "is-rounded" : "",
  ]);
  const selectClassNames = foldClassNames([
    _innerSelectClassName,
    isLoading ? "is-loading" : "",
  ]);

  return (
    <div data-testid="FormSelectContainer" className={`select ${classNames}`}>
      <select
        data-testid="FormSelect"
        className={selectClassNames}
        ref={innerRef}
        {...props}
      ></select>
    </div>
  );
};

const WrappedBulmaFormSelect = withBulmaProps(FormSelect);

export default forwardRef<
  HTMLSelectElement,
  Parameters<typeof WrappedBulmaFormSelect>[0]
>((props, ref) => {
  return <WrappedBulmaFormSelect {...props} innerRef={ref} />;
});

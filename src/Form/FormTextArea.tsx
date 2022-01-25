import React, { forwardRef } from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import useFormFieldContext from "./formFieldContext";

import { InnerFormTextAreaProps } from "./Form.types";

const FormTextArea: React.FC<
  InnerFormTextAreaProps & { innerRef?: React.Ref<HTMLTextAreaElement> }
> = ({
  className,
  size,
  color,
  state,
  isLoading = false,
  hasFixedSize = false,
  innerRef,
  ...props
}) => {
  const context = useFormFieldContext();
  const classNames = foldClassNames([
    className ?? "",
    size ?? context.size ?? "",
    color ?? "",
    state ?? "",
    isLoading ? "is-loading" : "",
    hasFixedSize ? "has-fixed-size" : "",
  ]);

  return (
    <textarea
      data-testid="FormTextArea"
      className={`textarea ${classNames}`}
      ref={innerRef}
      {...props}
    ></textarea>
  );
};

const WrappedBulmaTextAreaInput = withBulmaProps(FormTextArea);

export default forwardRef<
  HTMLTextAreaElement,
  Parameters<typeof WrappedBulmaTextAreaInput>[0]
>((props, ref) => {
  return <WrappedBulmaTextAreaInput {...props} innerRef={ref} />;
});

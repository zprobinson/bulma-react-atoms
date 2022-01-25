import React from "react";
import withBulmaProps from "../bulma";

import { InnerButtonProps } from "../Button/Button.types";

/**
 * Notice that because this button should exist as a child of the Form component,
 * the onClick prop is omitted because the Form's onSubmit callback will be triggered
 * when this button is clicked by default.
 */
const SubmitButton: React.FC<Omit<InnerButtonProps, "type" | "onClick">> = ({
  children,
  ...props
}) => {
  return (
    <button
      data-testid="SubmitButton"
      type="submit"
      onClick={() => {}}
      {...props}
    >
      {children ?? "Submit"}
    </button>
  );
};

export default withBulmaProps(SubmitButton);

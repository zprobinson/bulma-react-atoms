import React from "react";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";

/**
 * Notice that because this button should exist as a child of the Form component,
 * the onClick prop is omitted because the Form's onSubmit callback will be triggered
 * when this button is clicked by default.
 */
const SubmitButton: React.FC<Omit<ButtonProps, "type" | "onClick">> = ({
  children,
  ...props
}) => {
  return (
    <Button
      data-testid="SubmitButton"
      type="submit"
      onClick={() => {}}
      {...props}
    >
      {children ?? "Submit"}
    </Button>
  );
};

export default SubmitButton;

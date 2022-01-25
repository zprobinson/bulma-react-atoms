import React from "react";
import withBulmaProps from "../bulma";

const FormFieldBody: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-testid="FormFieldBody"
      className={`field-body ${className}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(FormFieldBody);

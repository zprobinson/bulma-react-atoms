import React from "react";
import withBulmaProps from "../bulma";

const DropdownDivider: React.VFC<
  Omit<React.ComponentPropsWithoutRef<"hr">, "children">
> = ({ className, ...props }) => {
  return <hr className={`dropdown-divider ${className}`} {...props} />;
};

export default withBulmaProps(DropdownDivider);

import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerTagsProps } from "./Tags.types";

const Tags: React.FC<InnerTagsProps> = ({
  children,
  className,
  groupSize,
  hasAddons = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    groupSize ?? "",
    hasAddons ? "has-addons" : "",
  ]);

  return (
    <div data-testid="Tags" className={`tags ${classNames}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Tags);

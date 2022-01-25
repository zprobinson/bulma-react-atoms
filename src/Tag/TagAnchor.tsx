import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerTagAnchorProps } from "./Tag.types";

/**
 * @deprecated Use Tag with the `as` prop instead.
 */
const TagAnchor: React.FC<InnerTagAnchorProps> = ({
  children,
  className,
  color,
  size,
  isDelete = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    isDelete ? "is-delete" : "",
  ]);

  return (
    <a data-testid="Tag" className={`tag ${classNames}`} {...props}>
      {children}
    </a>
  );
};

/**
 * @deprecated Use Tag with the `as` prop instead.
 */
export default withBulmaProps(TagAnchor);

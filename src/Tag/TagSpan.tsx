import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerTagSpanProps } from "./Tag.types";

/**
 * @deprecated Use Tag with the `as` prop instead.
 */
const TagSpan: React.FC<InnerTagSpanProps> = ({
  children,
  className,
  color,
  size,
  isDelete,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    isDelete ? "is-delete" : "",
  ]);

  return (
    <span data-testid="Tag" className={`tag ${classNames}`} {...props}>
      {children}
    </span>
  );
};

/**
 * @deprecated Use Tag with the `as` prop instead.
 */
export default withBulmaProps(TagSpan);

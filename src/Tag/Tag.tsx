import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaPropsG } from "../utilities/propUtilities";

import { TagProps } from "./Tag.types";

const _default_element_ = "span";

const Tag = <E extends React.ElementType = typeof _default_element_>({
  as,
  color,
  size,
  isDelete = false,
  ...props
}: TagProps<E>) => {
  const { bulmaProps, componentProps } = partitionBulmaPropsG(props);
  const helpers = foldHelpers(bulmaProps);
  const { className, ...rest } = componentProps;
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    size ?? "",
    isDelete ? "is-delete" : "",
    helpers,
  ]);

  const Component = as ?? _default_element_;

  return (
    <Component
      data-testid="Tag"
      className={`tag ${classNames}`}
      {...rest}
    ></Component>
  );
};

export default Tag;

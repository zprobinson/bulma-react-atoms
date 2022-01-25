import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerImageProps } from "./Image.types";

const Image: React.FC<InnerImageProps> = ({
  children,
  className,
  dimension,
  imgProps,
  isFullwidth = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    dimension ?? "",
    isFullwidth ? "is-fullwidth" : "",
  ]);

  return (
    <figure data-testid="Image" className={`image ${classNames}`} {...props}>
      {children ?? <img {...imgProps} />}
    </figure>
  );
};

export default withBulmaProps(Image);

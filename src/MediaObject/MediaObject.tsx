import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";

const MediaObject: React.FC<React.ComponentPropsWithoutRef<"article">> = (
  props
) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <article
      data-testid="MediaObject"
      className={classNames}
      {...rest}
    ></article>
  );
};

export default MediaObject;

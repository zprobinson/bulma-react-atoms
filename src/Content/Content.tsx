import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { ContentProps } from "./Content.types";

const Content: React.FC<ContentProps> = ({ size, ...props }) => {
  const { classNames, rest } = useInnerBulmaProps(props, size ?? "");
  return (
    <div
      data-testid="Content"
      className={`content ${classNames}`}
      {...rest}
    ></div>
  );
};

export default Content;

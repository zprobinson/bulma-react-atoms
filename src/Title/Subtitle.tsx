import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { DynamicHeadingElement, SubtitleProps } from "./Title.types";

const Subtitle: React.FC<SubtitleProps> = ({ size = "3", ...props }) => {
  const { classNames, rest } = useInnerBulmaProps(props, `is-${size}`);
  const Component = `h${size}` as DynamicHeadingElement;

  return (
    <Component
      data-testid="Subtitle"
      className={`subtitle ${classNames}`}
      {...rest}
    ></Component>
  );
};

export default Subtitle;

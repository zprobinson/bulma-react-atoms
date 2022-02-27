import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { SectionProps } from "./Section.types";

const Section: React.FC<SectionProps> = ({ size, ...props }) => {
  const { classNames, rest } = useInnerBulmaProps(props, size ?? "");

  return (
    <div
      data-testid="Section"
      className={`section ${classNames}`}
      {...rest}
    ></div>
  );
};

export default Section;

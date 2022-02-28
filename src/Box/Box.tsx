import React from "react";
import { BoxProps } from "./Box.types";
import { useInnerBulmaProps } from "../utilities/propUtilities";

const Box: React.FC<BoxProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div data-testid="Box" className={`box ${classNames}`} {...rest}></div>
  );
};

export default Box;

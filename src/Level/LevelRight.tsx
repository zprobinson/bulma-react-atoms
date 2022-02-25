import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { LevelRightProps } from "./Level.types";

const LevelRight: React.FC<LevelRightProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div
      data-testid="LevelRight"
      className={`level-right ${classNames}`}
      {...rest}
    ></div>
  );
};

export default LevelRight;

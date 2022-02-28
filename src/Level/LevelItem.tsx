import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { LevelItemProps } from "./Level.types";

const LevelItem: React.FC<LevelItemProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div
      data-testid="LevelItem"
      className={`level-item ${classNames}`}
      {...rest}
    ></div>
  );
};

export default LevelItem;

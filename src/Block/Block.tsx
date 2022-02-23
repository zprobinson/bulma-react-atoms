import React from "react";
import withBulmaProps from "../bulma";
import { BlockProps } from "./Block.types";
import { useInnerBulmaProps } from "../utilities/propUtilities";

const Block: React.FC<BlockProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div data-testid="Block" className={`block ${classNames}`} {...rest}></div>
  );
};

export default withBulmaProps(Block);

import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { DeleteProps } from "./Delete.types";

const Delete: React.VFC<DeleteProps> = ({ size, ...props }) => {
  const { classNames, rest } = useInnerBulmaProps(props, size);
  return (
    <button
      data-testid="Delete"
      className={`delete ${classNames}`}
      {...rest}
    ></button>
  );
};

export default Delete;

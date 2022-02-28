import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar: React.VFC<ProgressBarProps> = ({
  color,
  size,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    color ?? "",
    size ?? ""
  );

  return (
    <progress
      data-testid="ProgressBar"
      className={`progress ${classNames}`}
      {...rest}
    >
      {props.value ?? undefined}
    </progress>
  );
};

export default ProgressBar;

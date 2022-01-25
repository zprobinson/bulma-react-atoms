import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerProgressBarProps } from "./ProgressBar.types";

const ProgressBar: React.VFC<Omit<InnerProgressBarProps, "children">> = ({
  className,
  color,
  size,
  ...props
}) => {
  const classNames = foldClassNames([className ?? "", color ?? "", size ?? ""]);

  return (
    <progress
      data-testid="ProgressBar"
      className={`progress ${classNames}`}
      {...props}
    >
      {props.value ?? undefined}
    </progress>
  );
};

export default withBulmaProps(ProgressBar);

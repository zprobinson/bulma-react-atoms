import React from "react";
import withBulmaProps from "../bulma";
import { OneOrMore } from "../types";
import { foldClassNames } from "../utilities/listUtils";
import { ColumnsGap, InnerColumnsProps } from "./Columns.types";

const getGapClass: (gap: OneOrMore<ColumnsGap> | undefined) => string = (gap) =>
  gap != null
    ? gap === "is-gapless"
      ? gap
      : `is-variable ${foldClassNames(gap)}`
    : "";

const Columns: React.FC<InnerColumnsProps> = ({
  children,
  className,
  gap,
  responsive,
  options,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    responsive ?? "",
    getGapClass(gap),
    foldClassNames(options),
  ]);

  return (
    <div data-testid="Columns" className={`columns ${classNames}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Columns);

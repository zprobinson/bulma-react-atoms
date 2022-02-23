import React from "react";
import { OneOrMore } from "../types";
import { foldClassNames } from "../utilities/listUtils";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { ColumnsGap, ColumnsProps } from "./Columns.types";

const getGapClass: (gap: OneOrMore<ColumnsGap> | undefined) => string = (gap) =>
  gap !== undefined
    ? gap === "is-gapless"
      ? gap
      : `is-variable ${foldClassNames(gap)}`
    : "";

const Columns: React.FC<ColumnsProps> = ({
  gap,
  responsive,
  options,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    getGapClass(gap),
    responsive,
    foldClassNames(options)
  );

  return (
    <div
      data-testid="Columns"
      className={`columns ${classNames}`}
      {...rest}
    ></div>
  );
};

export default Columns;

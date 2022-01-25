import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import { InnerColumnProps } from "./Column.types";

const Column: React.FC<InnerColumnProps> = ({
  children,
  className,
  columnSize,
  offset,
  narrow,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    foldClassNames(columnSize ?? ""),
    foldClassNames(offset ?? ""),
    foldClassNames(narrow ?? ""),
  ]);

  return (
    <div data-testid="Column" className={`column ${classNames}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Column);

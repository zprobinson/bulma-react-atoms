import { BulmaComponentPropsWithoutRef, Is, OneOrMore } from "../types";

export type TableContainerProps = Omit<
  BulmaComponentPropsWithoutRef<"div">,
  "textColor" | "backgroundColor" | "fontAlignment"
>;

export type TableProps = BulmaComponentPropsWithoutRef<"table"> & {
  modifiers?: OneOrMore<TableModifierOption>;
};

export type TableHeaderProps = Omit<
  BulmaComponentPropsWithoutRef<"thead">,
  "textColor" | "margin" | "padding" | "fontAlignment" | "fontWeight"
>;
export type TableFooterProps = TableHeaderProps;

export type TableBodyProps = Omit<
  BulmaComponentPropsWithoutRef<"tbody">,
  "margin" | "padding"
>;

export type TableRowProps = Omit<
  BulmaComponentPropsWithoutRef<"tr">,
  "margin" | "padding"
> & {
  isSelected?: boolean;
};

export type TableHeaderCellProps = Omit<
  BulmaComponentPropsWithoutRef<"th">,
  "margin"
>;
export type TableDataCellProps = TableHeaderCellProps;

export type TableModifierOption = Is<
  "bordered" | "striped" | "narrow" | "hoverable" | "fullwidth"
>;

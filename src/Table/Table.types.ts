import {
  BulmaComponentPropsWithoutRef,
  WithoutHelpers,
  Is,
  OneOrMore,
} from "../types";

// TODO: either remove narrowed BulmaHelpers types or find fix around HOC. -z

export type InnerTableContainerProps = WithoutHelpers<TableContainerProps>;
export type InnerTableProps = WithoutHelpers<TableProps>;
export type InnerTableHeaderProps = WithoutHelpers<TableHeaderProps>;
export type InnerTableFooterProps = InnerTableHeaderProps;
export type InnerTableBodyProps = WithoutHelpers<TableBodyProps>;
export type InnerTableRowProps = WithoutHelpers<TableRowProps>;
export type InnerTableHeaderCellProps = WithoutHelpers<TableHeaderCellProps>;
export type InnerTableDataCellProps = InnerTableHeaderCellProps;

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

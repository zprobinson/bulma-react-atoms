import {
  Breakpoint,
  BulmaComponentPropsWithoutRef,
  Is,
  OneOrMore,
  PartialReadonly,
} from "../types";

export type ColumnProps = BulmaComponentPropsWithoutRef<"div"> &
  PartialReadonly<{
    columnSize: OneOrMore<ColumnSize>;
    offset: OneOrMore<ColumnOffset>;
    narrow: OneOrMore<ColumnNarrow>;
  }>;

/* --- Columns Options ---- */
type GapOption = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
type GapBreakpointOption = `${GapOption}-${Breakpoint}`;

export type ColumnsGap =
  | Is<GapOption>
  | Is<GapBreakpointOption>
  | Is<"gapless">;

type ColumnsResponsivenessOption = "mobile" | "desktop";
export type ColumnsResponsiveness = Is<ColumnsResponsivenessOption>;

type ColumnsOptionsOption = "vcentered" | "multiline" | "centered";
export type ColumnsOptions = Is<ColumnsOptionsOption>;

/* ---- Column Options ---- */
type ColumnSizeOption =
  | "full"
  | "one-quarter"
  | "one-third"
  | "half"
  | "two-thirds"
  | "three-quarters"
  | "four-fifths"
  | "three-fifths"
  | "two-fifths"
  | "one-fifth"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";
type ColumnSizeBreakpointOption = `${ColumnSizeOption}-${Breakpoint}`;

export type ColumnSize = Is<ColumnSizeOption> | Is<ColumnSizeBreakpointOption>;
export type ColumnOffset =
  | `is-offset-${ColumnSizeOption}`
  | `is-offset-${ColumnSizeOption}-${Breakpoint}`;
export type ColumnNarrow = "is-narrow" | `is-narrow-${Breakpoint}`;

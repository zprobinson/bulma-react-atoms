import {
  Breakpoint,
  BulmaComponentPropsWithoutRef,
  Is,
  OneOrMore,
  PartialReadonly,
} from "../types";

export type ColumnsProps = BulmaComponentPropsWithoutRef<"div"> &
  PartialReadonly<{
    gap: OneOrMore<ColumnsGap>;
    responsive: ColumnsResponsiveness;
    options: OneOrMore<ColumnsOptions>;
  }>;

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

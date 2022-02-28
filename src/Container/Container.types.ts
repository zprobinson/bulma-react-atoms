import { BulmaComponentPropsWithoutRef } from "../types";

export type ContainerProps = BulmaComponentPropsWithoutRef<"div"> & {
  isFluid?: boolean;
  breakpoint?: ContainerBreakpoint;
};

type ContainerBreakpoint =
  | "is-widescreen"
  | "is-fullhd"
  | "is-max-desktop"
  | "is-max-widescreen";

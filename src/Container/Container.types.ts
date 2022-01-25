import { BulmaComponentPropsWithoutRef, WithoutHelpers } from "../types";

export type InnerContainerProps = WithoutHelpers<ContainerProps>;

export type ContainerProps = BulmaComponentPropsWithoutRef<"div"> & {
  isFluid?: boolean;
  breakpoint?: ContainerBreakpoint;
};

type ContainerBreakpoint =
  | "is-widescreen"
  | "is-fullhd"
  | "is-max-desktop"
  | "is-max-widescreen";

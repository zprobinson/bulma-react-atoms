import {
  BulmaComponentPropsWithoutRef,
  WithoutHelpers,
  Is,
  PrimaryColor,
  SecondaryColor,
  Size,
} from "../types";

export type InnerProgressBarProps = WithoutHelpers<ProgressBarProps>;

export type ProgressBarProps = Omit<
  BulmaComponentPropsWithoutRef<"progress">,
  "children"
> & {
  color?: ProgressBarColor;
  size?: ProgressBarSize;
};

type ProgressBarColor = Is<PrimaryColor | SecondaryColor>;
type ProgressBarSize = Size;

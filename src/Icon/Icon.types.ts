import { BulmaComponentPropsWithoutRef, Size, WithoutHelpers } from "../types";

export type InnerIconProps = WithoutHelpers<IconProps>;
export type InnerIconTextProps = WithoutHelpers<IconTextProps>;

export type IconProps = BulmaComponentPropsWithoutRef<"span"> & {
  containerSize?: Exclude<Size, "is-normal">;
  iconFontClass?: string;
};

export type IconTextProps = BulmaComponentPropsWithoutRef<"span" | "div"> & {
  renderAs?: "span" | "div";
};

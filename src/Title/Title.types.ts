import { BulmaComponentPropsWithoutRef } from "../types";

export type TitleProps = BulmaComponentPropsWithoutRef<"h1"> & {
  size?: TitleSize;
  isSpaced?: boolean;
};

export type SubtitleProps = Omit<TitleProps, "isSpaced">;

export type TitleSize = "1" | "2" | "3" | "4" | "5" | "6";

export type DynamicHeadingElement = React.ElementType<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>;

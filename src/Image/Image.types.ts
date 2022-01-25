import { WithoutHelpers } from "./../types/component";
import { BulmaComponentPropsWithoutRef, Is } from "..";

export type InnerImageProps = WithoutHelpers<ImageProps>;

export type ImageProps = BulmaComponentPropsWithoutRef<"figure"> & {
  dimension: FixedSquare | Ratio;
  isFullwidth?: boolean;
  imgProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
};

type FixedSquareOption =
  | "16x16"
  | "24x24"
  | "32x32"
  | "48x48"
  | "64x64"
  | "96x96"
  | "128x128";

export type FixedSquare = Is<FixedSquareOption>;

type RatioOption =
  | "square"
  | "1by1"
  | "5by4"
  | "4by3"
  | "3by2"
  | "5by3"
  | "16by9"
  | "2by1"
  | "3by1"
  | "4by5"
  | "3by4"
  | "2by3"
  | "3by5"
  | "9by16"
  | "1by2"
  | "1by3";

export type Ratio = Is<RatioOption>;

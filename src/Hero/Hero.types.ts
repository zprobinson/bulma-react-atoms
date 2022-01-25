import {
  BulmaComponentPropsWithoutRef,
  PrimaryColor,
  Size,
  WithoutHelpers,
  Is,
} from "../types";

export const __FULLHEIGHT_WITH_NAVBAR__ = "is-fullheight-with-navbar" as const;

export type InnerHeroProps = WithoutHelpers<HeroProps>;

export type HeroProps = BulmaComponentPropsWithoutRef<"section"> & {
  color?: Is<PrimaryColor>;
  size?: Exclude<Size, "is-normal"> | "is-halfheight" | "is-fullheight";
  isFullHeightWithNavbar?: boolean;
};

export type HeroHeaderProps = BulmaComponentPropsWithoutRef<"div">;
export type HeroBodyProps = HeroHeaderProps;
export type HeroFooterProps = HeroHeaderProps;

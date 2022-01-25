import {
  BulmaComponentPropsWithoutRef,
  BulmaHelpers,
  WithoutHelpers,
  Polymorphic,
} from "../types";

export type InnerCardHeaderTitleProps = WithoutHelpers<CardHeaderTitleProps>;

export type CardProps = BulmaComponentPropsWithoutRef<"div">;

export type CardHeaderProps = BulmaComponentPropsWithoutRef<"header">;
export type CardHeaderTitleProps = BulmaComponentPropsWithoutRef<"p"> & {
  isCentered?: boolean;
};
export type CardHeaderIconProps = BulmaComponentPropsWithoutRef<"button">;

export type CardImageProps = BulmaComponentPropsWithoutRef<"div">;

export type CardContentProps = BulmaComponentPropsWithoutRef<"div">;

export type CardFooterProps = BulmaComponentPropsWithoutRef<"footer">;
/**
 * @deprecated Use CardFooterItemProps with the `as` prop instead.
 */
export type CardFooterItemAnchorProps = BulmaComponentPropsWithoutRef<"a">;
/**
 * @deprecated Use CardFooterItem with the `as` prop instead.
 */
export type CardFooterItemParagraphProps = BulmaComponentPropsWithoutRef<"div">;

export type CardFooterItemProps<E extends React.ElementType> = Polymorphic<
  E,
  BulmaHelpers
>;

import {
  BulmaComponentPropsWithoutRef,
  WithoutHelpers,
  Is,
  PrimaryColor,
  SecondaryColor,
  Size,
  Polymorphic,
  BulmaHelpers,
} from "../types";

export type InnerTagAnchorProps = WithoutHelpers<TagAnchorProps>;
export type InnerTagSpanProps = WithoutHelpers<TagSpanProps>;

/**
 * @deprecated Use Tag with the `as` prop instead.
 */
export type TagAnchorProps = BulmaComponentPropsWithoutRef<"a"> & {
  color?: TagColor;
  size?: Exclude<Size, "is-small">;
  isDelete?: boolean;
};

/**
 * @deprecated Use Tag with the `as` prop instead.
 */
export type TagSpanProps = BulmaComponentPropsWithoutRef<"span"> & {
  color?: TagColor;
  size?: Exclude<Size, "is-small">;
  isDelete?: boolean;
};

export type TagProps<
  E extends React.ElementType = React.ElementType
> = Polymorphic<
  E,
  BulmaHelpers & {
    color?: TagColor;
    size?: Exclude<Size, "is-small">;
    isDelete?: boolean;
  }
>;

type TagColorOption = Is<PrimaryColor>;
type TagColorLightOption = `${TagColorOption} is-light`;

export type TagColor =
  | TagColorOption
  | Is<SecondaryColor>
  | TagColorLightOption;

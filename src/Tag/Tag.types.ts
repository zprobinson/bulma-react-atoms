import {
  BulmaHelpers,
  Is,
  Polymorphic,
  PrimaryColor,
  SecondaryColor,
  Size,
} from "../types";

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

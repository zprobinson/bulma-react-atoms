import { MouseEventHandler } from "react";
import {
  BulmaComponentPropsWithoutRef,
  Is,
  OneOrMore,
  PrimaryColor,
  SecondaryColor,
  Size,
  WithoutHelpers,
} from "../types";

export type ButtonProps = BulmaComponentPropsWithoutRef<"button"> & {
  onClick: MouseEventHandler<HTMLButtonElement>;
  color?: ButtonColor;
  size?: Size;
  state?: Exclude<Is<State>, "is-loading">;
  modifiers?: OneOrMore<ButtonModifier>;
  isLoading?: boolean;
};

type State = "hovered" | "focused" | "active" | "loading";

type ButtonColorOption = Is<PrimaryColor>;
type ButtonColorLightOption = `${ButtonColorOption} is-light`;

export type ButtonColor =
  | Is<"text" | "ghost">
  | Is<SecondaryColor>
  | ButtonColorOption
  | ButtonColorLightOption;
export type ButtonModifier = Is<
  "fullwidth" | "outlined" | "inverted" | "rounded" | "static" | "selected"
>;

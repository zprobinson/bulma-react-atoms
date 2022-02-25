import {
  BulmaComponentPropsWithoutRef,
  Is,
  PrimaryColor,
  SecondaryColor,
  Size,
} from "../types";

export type MessageProps = BulmaComponentPropsWithoutRef<"article"> & {
  color?: MessageColor;
  size?: Exclude<Size, "is-normal">;
};

export type MessageHeaderProps = BulmaComponentPropsWithoutRef<"div">;
export type MessageBodyProps = BulmaComponentPropsWithoutRef<"div">;

export type MessageColor = Is<PrimaryColor> | Is<SecondaryColor>;

import { WithoutHelpers } from "./../types/component";
import { MouseEventHandler } from "react";
import { BulmaComponentPropsWithoutRef, Size } from "..";

export type InnerDeleteProps = WithoutHelpers<DeleteProps>;

export type DeleteProps = BulmaComponentPropsWithoutRef<"button"> & {
  onClick: MouseEventHandler<HTMLButtonElement>;
  size?: DeleteSize;
};

type DeleteSize = Extract<Size, "is-small" | "is-medium" | "is-large">;

import { WithoutHelpers } from "./../types/component";
import { MouseEventHandler } from "react";
import { BulmaComponentPropsWithoutRef, Size } from "..";

export type DeleteProps = Omit<
  BulmaComponentPropsWithoutRef<"button"> & {
    onClick: MouseEventHandler<HTMLButtonElement>;
    size?: DeleteSize;
  },
  "children"
>;

type DeleteSize = Extract<Size, "is-small" | "is-medium" | "is-large">;

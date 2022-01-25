import { WithoutHelpers } from "./../types/component";
import { BulmaComponentPropsWithoutRef, Is } from "..";

export type InnerContentProps = WithoutHelpers<ContentProps>;

export type ContentProps = BulmaComponentPropsWithoutRef<"div"> & {
  size?: ContentSize;
};

type ContentSize = Is<"small" | "normal" | "medium" | "large">;

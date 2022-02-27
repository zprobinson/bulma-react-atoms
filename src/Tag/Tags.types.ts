import { BulmaComponentPropsWithoutRef, WithoutHelpers } from "../types";

export type TagsProps = BulmaComponentPropsWithoutRef<"div"> & {
  hasAddons?: boolean;
  groupSize?: `are-${"normal" | "medium" | "large"}`;
};

import { BulmaComponentPropsWithoutRef, WithoutHelpers } from "../types";

export type InnerTagsProps = WithoutHelpers<TagsProps>;

export type TagsProps = BulmaComponentPropsWithoutRef<"div"> & {
  hasAddons?: boolean;
  groupSize?: `are-${"normal" | "medium" | "large"}`;
};

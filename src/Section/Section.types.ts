import {
  BulmaComponentPropsWithoutRef,
  Size,
  WithoutHelpers,
} from "./../types";

export type InnerSectionProps = WithoutHelpers<SectionProps>;

export type SectionProps = BulmaComponentPropsWithoutRef<"section"> & {
  size?: Extract<Size, "is-medium" | "is-large">;
};

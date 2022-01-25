import {
  BulmaComponentPropsWithoutRef,
  WithoutHelpers,
  BulmaHelpers,
  Is,
  Size,
} from "../types";

export type InnerPaginationProps = WithoutHelpers<PaginationProps>;
export type InnerPaginationIncrementalProps = WithoutHelpers<PaginationIncrementalProps> & {
  type: "previous" | "next";
};
export type InnerPaginationLinkProps = WithoutHelpers<PaginationLinkProps>;
export type InnerPaginationEllipsisProps = WithoutHelpers<PaginationEllipsisProps>;

export type PaginationProps = BulmaComponentPropsWithoutRef<"nav"> & {
  alignment?: Is<"centered" | "right">;
  size?: Exclude<Size, "is-normal">;
  isRounded?: boolean;
};

export type PaginationIncrementalProps = BulmaComponentPropsWithoutRef<"a"> & {
  // TODO: Figure out breaking change to using 'is-disabled' class over disabled attribute on anchor tags. -z
  // see https://github.com/jgthms/bulma/commit/a28bf751b10d47d59f83a979748b32c3e7f85a62
  // see https://github.com/jgthms/bulma/issues/276#issuecomment-578889739
  isDisabled?: boolean;
};
export type PaginationPreviousProps = PaginationIncrementalProps;
export type PaginationNextProps = PaginationIncrementalProps;

export type PaginationListProps = BulmaComponentPropsWithoutRef<"ul">;
export type PaginationLinkProps = BulmaComponentPropsWithoutRef<"a"> & {
  isCurrent?: boolean;
  isDisabled?: boolean;
  innerListItemProps?: React.ComponentPropsWithoutRef<"li">;
};
export type PaginationEllipsisProps = Omit<
  BulmaComponentPropsWithoutRef<"span"> & {
    innerListItemProps?: React.ComponentPropsWithoutRef<"li">;
  },
  "children"
>;

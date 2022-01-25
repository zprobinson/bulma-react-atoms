import {
  BulmaComponentPropsWithoutRef,
  Is,
  Size,
  WithoutHelpers,
} from "../types";

export type InnerTabsProps = WithoutHelpers<TabsProps>;
export type InnerTabsListItemProps = WithoutHelpers<TabsListItemProps>;
export type InnerTabsLinkProps = WithoutHelpers<TabsLinkProps>;

export type TabsProps = BulmaComponentPropsWithoutRef<"div"> & {
  alignment?: Is<"centered" | "right">;
  size?: Exclude<Size, "is-normal">;
  isBoxed?: boolean;
  isToggle?: boolean;
  isToggleRounded?: boolean;
  isFullwidth?: boolean;
};
export type TabsListProps = BulmaComponentPropsWithoutRef<"ul">;
export type TabsListItemProps = BulmaComponentPropsWithoutRef<"li"> & {
  isActive?: boolean;
};
export type TabsLinkProps = BulmaComponentPropsWithoutRef<"a"> & {
  isActive?: boolean;
  innerListItemProps?: React.ComponentPropsWithoutRef<"li">;
};

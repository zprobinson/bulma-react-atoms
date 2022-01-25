import {
  BulmaComponentPropsWithoutRef,
  WithoutHelpers,
} from "./../types/component";

export type InnerMenuListItemProps = WithoutHelpers<MenuListItemProps>;
export type InnerMenuLinkProps = WithoutHelpers<MenuLinkProps>;

export type MenuProps = BulmaComponentPropsWithoutRef<"aside">;

export type MenuLabelProps = BulmaComponentPropsWithoutRef<"p">;

export type MenuListProps = BulmaComponentPropsWithoutRef<"ul">;

type IsActive = { isActive?: boolean };
export type MenuListItemProps = BulmaComponentPropsWithoutRef<"a"> & IsActive;
export type MenuLinkProps = BulmaComponentPropsWithoutRef<"a"> & IsActive;

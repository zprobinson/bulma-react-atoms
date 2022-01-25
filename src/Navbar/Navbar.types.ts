import { WithoutHelpers } from "./../types/component";
import {
  BulmaComponentPropsWithoutRef,
  Is,
  OneOrMore,
  PrimaryColor,
  SecondaryColor,
  Polymorphic,
  BulmaHelpers,
} from "../types";

export type InnerNavbarProps = WithoutHelpers<NavbarProps>;
export type InnerNavbarBurgerProps = WithoutHelpers<NavbarBurgerProps>;
export type InnerNavbarMenuProps = WithoutHelpers<NavbarMenuProps>;
export type InnerNavbarItemAnchorProps = WithoutHelpers<NavbarItemAnchorProps>;
export type InnerNavbarItemDivProps = WithoutHelpers<NavbarItemDivProps>;
export type InnerNavbarLinkProps = WithoutHelpers<NavbarLinkProps>;
export type InnerNavbarDropdownProps = WithoutHelpers<NavbarDropdownProps>;

type NavbarColor = PrimaryColor | SecondaryColor;

export type NavbarProps = BulmaComponentPropsWithoutRef<"nav"> & {
  isTransparent?: boolean;
  /**
   * Add the corresponding `has-navbar-fixed-top` or `has-navbar-fixed-bottom` modifier to either the `<html>` or `<body>` element to provide the appropriate padding to the page.
   */
  isFixedHtmlInterop?: Is<"fixed-top" | "fixed-bottom">;
  color?: NavbarColor;
  modifiers?: OneOrMore<"is-spaced" | "has-shadow">;
};

export type NavbarBrandProps = BulmaComponentPropsWithoutRef<"div">;
export type NavbarBurgerProps = BulmaComponentPropsWithoutRef<"a"> & {
  isActive?: boolean;
};

export type NavbarMenuProps = BulmaComponentPropsWithoutRef<"div"> & {
  isActive?: boolean;
};
export type NavbarMenuStartProps = BulmaComponentPropsWithoutRef<"div">;
export type NavbarMenuEndProps = NavbarMenuStartProps;

/**
 * @deprecated Use NavbarItem with the `as` prop instead.
 */
export type NavbarItemAnchorProps = BulmaComponentPropsWithoutRef<"a"> & {
  isActive?: boolean;
  isExpanded?: boolean;
  isTab?: boolean;
};
/**
 * @deprecated Use NavbarItem with the `as` prop instead.
 */
export type NavbarItemDivProps = BulmaComponentPropsWithoutRef<"div"> & {
  isActive?: boolean;
  hasDropdown?: boolean;
  hasDropdownUp?: boolean;
  isHoverable?: boolean;
  isExpanded?: boolean;
  isTab?: boolean;
};

export type NavbarItemProps<E extends React.ElementType> = Polymorphic<
  E,
  BulmaHelpers & {
    isActive?: boolean;
    hasDropdown?: boolean;
    hasDropdownUp?: boolean;
    isHoverable?: boolean;
    isExpanded?: boolean;
    isTab?: boolean;
  }
>;

export type NavbarLinkProps = BulmaComponentPropsWithoutRef<"a"> & {
  isArrowless?: boolean;
};
export type NavbarDropdownProps = BulmaComponentPropsWithoutRef<"div"> & {
  isBoxed?: boolean;
  isRight?: boolean;
};
export type NavbarDividerProps = BulmaComponentPropsWithoutRef<"hr">;

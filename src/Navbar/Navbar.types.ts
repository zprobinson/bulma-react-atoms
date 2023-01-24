import {
    BulmaComponentPropsWithoutRef,
    BulmaHelpers,
    Is,
    OneOrMore,
    Polymorphic,
    PrimaryColor,
    SecondaryColor,
} from '../types';

type NavbarColor = Is<PrimaryColor | SecondaryColor>;

export type NavbarProps = BulmaComponentPropsWithoutRef<'nav'> & {
    isTransparent?: boolean;
    /**
     * Add the corresponding `has-navbar-fixed-top` or `has-navbar-fixed-bottom` modifier to either the `<html>` or `<body>` element to provide the appropriate padding to the page.
     */
    isFixedHtmlInterop?: Is<'fixed-top' | 'fixed-bottom'>;
    color?: NavbarColor;
    modifiers?: OneOrMore<'is-spaced' | 'has-shadow'>;
};

export type NavbarBrandProps = BulmaComponentPropsWithoutRef<'div'>;
export type NavbarBurgerProps = Omit<
    BulmaComponentPropsWithoutRef<'a'>,
    'children'
> & {
    isActive?: boolean;
};

export type NavbarMenuProps = BulmaComponentPropsWithoutRef<'div'> & {
    isActive?: boolean;
};
export type NavbarMenuStartProps = BulmaComponentPropsWithoutRef<'div'>;
export type NavbarMenuEndProps = NavbarMenuStartProps;

export type NavbarItemDefault = 'div';
export type NavbarItemProps<E extends React.ElementType> = Polymorphic<
    E,
    NavbarItemDefault,
    BulmaHelpers & {
        isActive?: boolean;
        hasDropdown?: boolean;
        hasDropdownUp?: boolean;
        isHoverable?: boolean;
        isExpanded?: boolean;
        isTab?: boolean;
    }
>;

export type NavbarLinkProps = BulmaComponentPropsWithoutRef<'a'> & {
    isArrowless?: boolean;
};
export type NavbarDropdownProps = BulmaComponentPropsWithoutRef<'div'> & {
    isBoxed?: boolean;
    isRight?: boolean;
};
export type NavbarDividerProps = Omit<
    BulmaComponentPropsWithoutRef<'hr'>,
    'children'
>;

import React from 'react';
import {
    BulmaComponentPropsWithoutRef,
    BulmaHelpers,
    Is,
    OneOrMore,
    Polymorphic,
    PrimaryColor,
    SecondaryColor,
    Size,
} from '../types';

export type ButtonDefault = 'button';
export type ButtonProps<E extends Extract<React.ElementType, 'a' | 'button'>> =
    Polymorphic<
        E,
        ButtonDefault,
        BulmaHelpers & {
            color?: ButtonColor;
            size?: Size;
            state?: Exclude<Is<State>, 'is-loading'>;
            modifiers?: OneOrMore<ButtonModifier>;
            isLoading?: boolean;
            isSelected?: boolean;
            isResponsive?: boolean;
        }
    >;

export type ButtonsProps = BulmaComponentPropsWithoutRef<'div'> & {
    hasAddons?: boolean;
    alignment?: 'is-centered' | 'is-right';
};

type State = 'hovered' | 'focused' | 'active' | 'loading';

type ButtonColorOption = Is<PrimaryColor>;
type ButtonColorLightOption = `${ButtonColorOption} is-light`;

export type ButtonColor =
    | Is<'text' | 'ghost'>
    | Is<SecondaryColor>
    | ButtonColorOption
    | ButtonColorLightOption;
export type ButtonModifier = Is<
    'fullwidth' | 'outlined' | 'inverted' | 'rounded' | 'static' | 'selected'
>;

import { IconProps } from './../Icon/Icon.types';
import {
    BulmaComponentPropsWithoutRef,
    BulmaHelpers,
    Polymorphic,
    PrimaryColor,
} from './../types';

export type PanelProps = BulmaComponentPropsWithoutRef<'nav'> & {
    color?: PrimaryColor;
};

export type PanelTabsProps = BulmaComponentPropsWithoutRef<'p'>;
export type PanelTabProps<E extends React.ElementType> = Polymorphic<
    E,
    BulmaHelpers & {
        isActive?: boolean;
    }
>;

export type PanelHeadingProps = BulmaComponentPropsWithoutRef<'p'>;

export type PanelBlockProps<E extends React.ElementType> = Polymorphic<
    E,
    BulmaHelpers
>;

export type PanelIconProps = Omit<IconProps, 'containerSize'>;

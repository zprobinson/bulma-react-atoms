import {
    Polymorphic,
    BulmaHelpers,
    BulmaComponentPropsWithoutRef,
} from '../types';

export type MenuProps = BulmaComponentPropsWithoutRef<'aside'>;

export type MenuLabelProps = BulmaComponentPropsWithoutRef<'p'>;

export type MenuListProps = BulmaComponentPropsWithoutRef<'ul'>;

export type MenuListItemDefault = 'a';
export type MenuListItemProps<E extends React.ElementType> = Polymorphic<
    E,
    MenuListItemDefault,
    BulmaHelpers & {
        isActive?: boolean;
        _innerListItemProps?: BulmaComponentPropsWithoutRef<'li'>;
    }
>;

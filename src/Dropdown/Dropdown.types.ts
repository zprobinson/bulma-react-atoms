import { Polymorphic } from '..';
import {
    BulmaComponentPropsWithoutRef,
    BulmaHelpers,
} from './../types/component';

export type DropdownProps = BulmaComponentPropsWithoutRef<'div'> & {
    isActive?: boolean;
    isHoverable?: boolean;
    isRightAligned?: boolean;
    isUp?: boolean;
};

export type DropdownTriggerProps = BulmaComponentPropsWithoutRef<'div'>;
export type DropdownMenuProps = BulmaComponentPropsWithoutRef<'div'>;
export type DropdownContentProps = BulmaComponentPropsWithoutRef<'div'>;

export type DropdownItemDefault = 'a';
export type DropdownItemProps<E extends React.ElementType> = Polymorphic<
    E,
    DropdownItemDefault,
    BulmaHelpers & { isActive?: boolean }
>;

export type DropdownDividerProps = Omit<
    BulmaComponentPropsWithoutRef<'hr'>,
    'children'
>;

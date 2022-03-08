import {
    BulmaComponentPropsWithoutRef,
    BulmaHelpers,
    Is,
    Polymorphic,
    Size,
} from '../types';

export type PaginationProps = BulmaComponentPropsWithoutRef<'nav'> & {
    alignment?: Is<'centered' | 'right'>;
    size?: Exclude<Size, 'is-normal'>;
    isRounded?: boolean;
};

// see https://github.com/jgthms/bulma/commit/a28bf751b10d47d59f83a979748b32c3e7f85a62
// see https://github.com/jgthms/bulma/issues/276#issuecomment-578889739
export type PaginationIncrementalProps<
    E extends React.ElementType
> = Polymorphic<
    E,
    BulmaHelpers & {
        isDisabled?: boolean;
        paginationType: 'previous' | 'next';
    }
>;
export type PaginationPreviousProps<E extends React.ElementType> = Omit<
    PaginationIncrementalProps<E>,
    'paginationType'
>;
export type PaginationNextProps<
    E extends React.ElementType
> = PaginationPreviousProps<E>;

export type PaginationListProps = BulmaComponentPropsWithoutRef<'ul'>;
export type PaginationLinkProps<E extends React.ElementType> = Polymorphic<
    E,
    BulmaHelpers & {
        isCurrent?: boolean;
        isDisabled?: boolean;
        innerListItemProps?: React.ComponentPropsWithoutRef<'li'>;
    }
>;
export type PaginationEllipsisProps = Omit<
    BulmaComponentPropsWithoutRef<'span'> & {
        innerListItemProps?: React.ComponentPropsWithoutRef<'li'>;
    },
    'children'
>;

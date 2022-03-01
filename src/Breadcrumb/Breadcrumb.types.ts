import { BulmaComponentPropsWithoutRef, Has, Is, Size } from '../types';

export type BreadcrumbProps = BulmaComponentPropsWithoutRef<'nav'> & {
    alignment?: BreadcrumbAlignmentOption;
    separator?: BreadcrumbSeparator;
    size?: BreadcrumbSize;
};

export type BreadcrumbItemProps = BulmaComponentPropsWithoutRef<'li'> & {
    isActive?: boolean;
};

export type BreadcrumbAlignmentOption = Is<'centered' | 'right'>;
export type BreadcrumbSeparatorOption = Has<
    'arrow' | 'bullet' | 'dot' | 'succeeds'
>;
export type BreadcrumbSeparator = `${BreadcrumbSeparatorOption}-separator`;

export type BreadcrumbSize = Exclude<Size, 'is-normal'>;

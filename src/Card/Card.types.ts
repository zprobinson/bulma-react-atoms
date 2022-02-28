import {
    BulmaComponentPropsWithoutRef,
    BulmaHelpers,
    Polymorphic,
} from '../types';

export type CardProps = BulmaComponentPropsWithoutRef<'div'>;

export type CardHeaderProps = BulmaComponentPropsWithoutRef<'header'>;
export type CardHeaderTitleProps = BulmaComponentPropsWithoutRef<'p'> & {
    isCentered?: boolean;
};
export type CardHeaderIconProps = BulmaComponentPropsWithoutRef<'button'>;

export type CardImageProps = BulmaComponentPropsWithoutRef<'div'>;

export type CardContentProps = BulmaComponentPropsWithoutRef<'div'>;

export type CardFooterProps = BulmaComponentPropsWithoutRef<'footer'>;

export type CardFooterItemProps<E extends React.ElementType> = Polymorphic<
    E,
    BulmaHelpers
>;

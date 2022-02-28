import {
    BulmaComponentPropsWithoutRef,
    Is,
    PrimaryColor,
    Size,
} from '../types';

export const __FULLHEIGHT_WITH_NAVBAR__ = 'is-fullheight-with-navbar' as const;

export type HeroProps = BulmaComponentPropsWithoutRef<'section'> & {
    color?: Is<PrimaryColor>;
    size?: Exclude<Size, 'is-normal'> | 'is-halfheight' | 'is-fullheight';
    isFullHeightWithNavbar?: boolean;
};

export type HeroHeaderProps = BulmaComponentPropsWithoutRef<'div'>;
export type HeroBodyProps = HeroHeaderProps;
export type HeroFooterProps = HeroHeaderProps;

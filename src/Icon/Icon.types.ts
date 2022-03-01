import { BulmaComponentPropsWithoutRef, Size } from '../types';

export type IconProps = BulmaComponentPropsWithoutRef<'span'> & {
    containerSize?: Exclude<Size, 'is-normal'>;
    iconFontClass?: string;
};

export type IconTextProps = BulmaComponentPropsWithoutRef<'span' | 'div'> & {
    as?: 'span' | 'div';
};

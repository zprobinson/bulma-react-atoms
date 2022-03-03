import { BulmaComponentPropsWithoutRef, Is } from '..';

export type ContentProps = BulmaComponentPropsWithoutRef<'div'> & {
    size?: ContentSize;
};

type ContentSize = Is<'small' | 'normal' | 'medium' | 'large'>;

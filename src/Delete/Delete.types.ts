import { MouseEventHandler } from 'react';
import { BulmaComponentPropsWithoutRef, Size } from '..';

export type DeleteProps = Omit<
    BulmaComponentPropsWithoutRef<'button'>,
    'children'
> & {
    onClick: MouseEventHandler<HTMLButtonElement>;
    size?: DeleteSize;
};

type DeleteSize = Extract<Size, 'is-small' | 'is-medium' | 'is-large'>;

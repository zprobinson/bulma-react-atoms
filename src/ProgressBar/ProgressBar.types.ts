import {
    BulmaComponentPropsWithoutRef,
    Is,
    PrimaryColor,
    SecondaryColor,
    Size,
} from '../types';

export type ProgressBarProps = Omit<
    BulmaComponentPropsWithoutRef<'progress'>,
    'children'
> & {
    color?: ProgressBarColor;
    size?: ProgressBarSize;
};

type ProgressBarColor = Is<PrimaryColor | SecondaryColor>;
type ProgressBarSize = Size;

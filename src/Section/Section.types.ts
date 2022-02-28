import { BulmaComponentPropsWithoutRef, Size } from './../types';

export type SectionProps = BulmaComponentPropsWithoutRef<'section'> & {
    size?: Extract<Size, 'is-medium' | 'is-large'>;
};

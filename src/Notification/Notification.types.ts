import { DeleteProps } from '../Delete';
import {
    BulmaComponentPropsWithoutRef,
    Is,
    PrimaryColor,
    SecondaryColor,
} from '../types';

export type NotificationProps = BulmaComponentPropsWithoutRef<'div'> & {
    onClose: () => void;
    color?: NotificationColor;
    deleteProps?: Omit<DeleteProps, 'onClick'>;
};

type NotificationColorOption = Is<PrimaryColor>;
type NotificationColorLightOption = `${NotificationColorOption} is-light`;

export type NotificationColor =
    | NotificationColorOption
    | Is<SecondaryColor>
    | NotificationColorLightOption;

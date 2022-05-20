import {
    BulmaHelpers,
    Is,
    Polymorphic,
    PrimaryColor,
    SecondaryColor,
    Size,
} from '../types';

export type TagDefault = 'span';
export type TagProps<E extends React.ElementType> = Polymorphic<
    E,
    TagDefault,
    BulmaHelpers & {
        color?: TagColor;
        size?: Exclude<Size, 'is-small'>;
        isDelete?: boolean;
    }
>;

type TagColorOption = Is<PrimaryColor>;
type TagColorLightOption = `${TagColorOption} is-light`;

export type TagColor =
    | TagColorOption
    | Is<SecondaryColor>
    | TagColorLightOption;

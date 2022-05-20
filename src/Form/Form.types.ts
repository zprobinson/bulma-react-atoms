import { IconProps } from './../Icon/Icon.types';
import { ButtonProps } from '../Button/Button.types';
import {
    BulmaComponentPropsWithoutRef,
    BulmaComponentPropsWithRef,
    Has,
    Is,
    OneOrMore,
    Override,
    PrimaryColor,
    SecondaryColor,
    Size,
} from './../types';

export type FormFieldContextType = {
    size?: Size | undefined;
    isHorizontal?: boolean | undefined;
};

export type FormProps = BulmaComponentPropsWithRef<'form'>;

export type FormFieldProps = Override<
    BulmaComponentPropsWithoutRef<'div'>,
    {
        kind?: 'addons' | 'grouped';
        alignment?: 'right' | 'centered';
        groupMultiline?: boolean;
        isExpanded?: boolean;
        isHorizontal?: boolean;
        size?: Size;
    }
>;

export type FormFieldLabelProps = Override<
    BulmaComponentPropsWithRef<'label'>,
    {
        /**
         * Use the empty string for size to intentionally reset the spacing for labels
         * on radio buttons and check boxes.
         */
        size?: Size | '';
    }
>;
export type FormFieldBodyProps = BulmaComponentPropsWithoutRef<'div'>;

export type FormControlProps = BulmaComponentPropsWithoutRef<'div'> & {
    iconAlignment?: OneOrMore<Has<'icons-left' | 'icons-right'>>;
    isFullwidth?: boolean;
    isLoading?: boolean;
};

export type FormIconProps = IconProps & {
    alignment?: Is<'left' | 'right'>;
};

export type FormInputProps = Override<
    BulmaComponentPropsWithRef<'input'>,
    {
        size?: Size;
        color?: Is<PrimaryColor | 'dark'>;
        isStatic?: boolean;
        isLoading?: boolean;
        isRounded?: boolean;
        state?: Is<'focused' | 'hovered'>;
        _innerInputSize?: React.ComponentProps<'input'>['size'];
    }
>;

export type FormTextAreaProps = Override<
    Omit<BulmaComponentPropsWithRef<'textarea'>, 'children'>,
    {
        size?: Size;
        color?: Is<PrimaryColor | 'dark'>;
        state?: Is<'focused' | 'hovered'>;
        isLoading?: boolean;
        hasFixedSize?: boolean;
    }
>;

export type FormSelectProps = Override<
    BulmaComponentPropsWithRef<'select'>,
    {
        size?: Size;
        color?: Is<PrimaryColor | 'dark'>;
        state?: Is<'focused' | 'hovered' | 'active'>;
        isLoading?: boolean;
        isMultiple?: boolean;
        isRounded?: boolean;
        isFullwidth?: boolean;
        _innerSelectClassName?: React.ComponentProps<'select'>['className'];
        _innerSelectSize?: React.ComponentProps<'select'>['size'];
    }
>;

export type FormCheckboxProps = Omit<
    BulmaComponentPropsWithRef<'input'> & {
        _innerDisabledColor?: string;
        _innerCheckboxClassName?: string;
    },
    'type'
>;

export type FormRadioProps = Omit<
    BulmaComponentPropsWithRef<'input'> & {
        _innerDisabledColor?: string;
        _innerRadioClassName?: string;
    },
    'type'
>;

export type FormSubmitButtonProps = Omit<ButtonProps, 'type' | 'onClick'>;

export type FormFileProps = Override<
    BulmaComponentPropsWithRef<'input'>,
    {
        fileLabel?: string;
        fileName?: string;
        fileIcon?: JSX.Element;
        color?: Is<PrimaryColor | SecondaryColor>;
        size?: Size;
        /**
         * You can move the CTA to the right side with the _is-right_ modifier.
         */
        alignment?: Is<'right' | 'centered'>;
        /**
         * With the _has-name_ modifier combined with the _file-name_ element, you can add a placeholder for the selected file name.
         */
        hasName?: boolean;
        isFullwidth?: boolean;
        isBoxed?: boolean;
    }
>;

export type FormFileIconProps = Omit<
    FormIconProps,
    'containerSize' | 'alignment'
>;

export type FormHelpProps = BulmaComponentPropsWithoutRef<'p'> & {
    color?: Is<PrimaryColor | SecondaryColor>;
};

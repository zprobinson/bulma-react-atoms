import { IconProps } from "./../Icon/Icon.types";
import {
  BulmaComponentPropsWithRef,
  BulmaComponentPropsWithoutRef,
  WithoutHelpers,
  Is,
  Has,
  Size,
  OneOrMore,
  PrimaryColor,
  SecondaryColor,
  Override,
} from "./../types";

export type FormFieldContextType = {
  size?: Size | undefined;
};

export type InnerFormFieldProps = WithoutHelpers<FormFieldProps>;
export type InnerFormFieldLabelProps = WithoutHelpers<FormFieldLabelProps>;
export type InnerFormControlProps = WithoutHelpers<FormControlProps>;
export type InnerFormIconProps = WithoutHelpers<FormIconProps>;
export type InnerFormInputProps = WithoutHelpers<FormInputProps>;
export type InnerFormTextAreaProps = WithoutHelpers<FormTextAreaProps>;
export type InnerFormSelectProps = WithoutHelpers<FormSelectProps>;
export type InnerFormCheckboxProps = WithoutHelpers<FormCheckboxProps>;
export type InnerFormRadioProps = WithoutHelpers<FormRadioProps>;
export type InnerFormFileProps = WithoutHelpers<FormFileProps>;

export type FormProps = BulmaComponentPropsWithRef<"form">;

export type FormFieldProps = Override<
  BulmaComponentPropsWithoutRef<"div">,
  {
    kind?: "addons" | "grouped";
    alignment?: "right" | "centered";
    groupMultiline?: boolean;
    isExpanded?: boolean;
    isHorizontal?: boolean;
    size?: Size;
  }
>;

export type FormFieldLabelProps = Override<
  BulmaComponentPropsWithRef<"label">,
  {
    size?: Size;
  }
>;
export type FormFieldBodyProps = BulmaComponentPropsWithoutRef<"div">;

export type FormControlProps = BulmaComponentPropsWithoutRef<"div"> & {
  iconAlignment?: OneOrMore<Has<"icons-left" | "icons-right">>;
  isFullwidth?: boolean;
  isLoading?: boolean;
};

export type FormIconProps = IconProps & {
  alignment?: Is<"left" | "right">;
};

export type FormInputProps = Override<
  BulmaComponentPropsWithRef<"input">,
  {
    size?: Size;
    color?: Is<PrimaryColor | "dark">;
    isStatic?: boolean;
    isLoading?: boolean;
    isRounded?: boolean;
    state?: Is<"focused" | "hovered">;
  }
>;

export type FormTextAreaProps = Override<
  BulmaComponentPropsWithRef<"textarea">,
  {
    size?: Size;
    color?: Is<PrimaryColor | "dark">;
    state?: Is<"focused" | "hovered">;
    isLoading?: boolean;
    hasFixedSize?: boolean;
  }
>;

export type FormSelectProps = Override<
  BulmaComponentPropsWithRef<"select">,
  {
    size?: Size;
    color?: Is<PrimaryColor | "dark">;
    state?: Is<"focused" | "hovered" | "active">;
    isLoading?: boolean;
    isMultiple?: boolean;
    isRounded?: boolean;
    _innerSelectClassName?: string;
  }
>;

export type FormCheckboxProps = Omit<
  BulmaComponentPropsWithRef<"input"> & {
    _innerDisabledColor?: string;
    _innerCheckboxClassName?: string;
  },
  "type"
>;

export type FormRadioProps = Omit<
  BulmaComponentPropsWithRef<"input"> & {
    _innerDisabledColor?: string;
    _innerRadioClassName?: string;
  },
  "type"
>;

export type FormSubmitButtonProps = Omit<
  BulmaComponentPropsWithoutRef<"button">,
  "type" | "onClick"
>;

export type FormFileProps = Override<
  BulmaComponentPropsWithRef<"input">,
  {
    fileLabel?: string;
    fileName?: string;
    fileIcon?: JSX.Element;
    color?: Is<PrimaryColor | SecondaryColor>;
    size?: Size;
    /**
     * You can move the CTA to the right side with the _is-right_ modifier.
     */
    alignment?: Is<"right" | "centered">;
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
  "containerSize" | "alignment"
>;

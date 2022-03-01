import React, { forwardRef } from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormInputProps } from './Form.types';
import useFormFieldContext from './formFieldContext';

const FormInput: React.FC<
    FormInputProps & { innerRef?: React.Ref<HTMLInputElement> }
> = ({
    size,
    color,
    state,
    isStatic = false,
    isLoading = false,
    isRounded = false,
    type = 'text',
    _innerInputSize,
    innerRef,
    ...props
}) => {
    const context = useFormFieldContext();
    const { classNames, rest } = useInnerBulmaProps(
        props,
        size ?? context.size ?? '',
        color ?? '',
        state ?? '',
        isStatic ? 'is-static' : '',
        isLoading ? 'is-loading' : '',
        isRounded ? 'is-rounded' : ''
    );

    return (
        <input
            data-testid="FormInput"
            type={type}
            className={`input ${classNames}`}
            ref={innerRef}
            size={_innerInputSize}
            {...rest}
        />
    );
};

export default forwardRef<HTMLInputElement, Parameters<typeof FormInput>[0]>(
    (props, ref) => {
        return <FormInput {...props} innerRef={ref} />;
    }
);

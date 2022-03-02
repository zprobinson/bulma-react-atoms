import React, { forwardRef } from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormTextAreaProps } from './Form.types';
import useFormFieldContext from './formFieldContext';

const FormTextArea: React.FC<
    FormTextAreaProps & { innerRef?: React.Ref<HTMLTextAreaElement> }
> = ({
    size,
    color,
    state,
    isLoading = false,
    hasFixedSize = false,
    innerRef,
    ...props
}) => {
    const context = useFormFieldContext();
    const { classNames, rest } = useInnerBulmaProps(
        props,
        size ?? context.size ?? '',
        color ?? '',
        state ?? '',
        isLoading ? 'is-loading' : '',
        hasFixedSize ? 'has-fixed-size' : ''
    );
    return (
        <textarea
            data-testid="FormTextArea"
            className={`textarea ${classNames}`}
            ref={innerRef}
            {...rest}
        ></textarea>
    );
};

export default forwardRef<
    HTMLTextAreaElement,
    Parameters<typeof FormTextArea>[0]
>((props, ref) => {
    return <FormTextArea {...props} innerRef={ref} />;
});

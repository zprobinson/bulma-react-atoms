import React, { forwardRef } from 'react';
import { foldClassNames } from '../utilities/listUtils';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormSelectProps } from './Form.types';
import useFormFieldContext from './useFormFieldContext';

const FormSelect: React.FC<
    FormSelectProps & { innerRef?: React.Ref<HTMLSelectElement> }
> = ({
    size,
    color,
    state,
    isLoading = false,
    isMultiple = false,
    isRounded = false,
    isFullwidth = false,
    _innerSelectClassName = '',
    _innerSelectSize,
    innerRef,
    ...props
}) => {
    const context = useFormFieldContext();
    const { classNames, rest } = useInnerBulmaProps(
        props,
        size ?? context.size ?? '',
        color ?? '',
        state ?? '',
        isMultiple ? 'is-multiple' : '',
        isRounded ? 'is-rounded' : '',
        isFullwidth ? 'is-fullwidth' : ''
    );
    const selectClassNames = foldClassNames([
        _innerSelectClassName,
        isLoading ? 'is-loading' : '',
    ]);
    return (
        <div
            data-testid="FormSelectContainer"
            className={`select ${classNames}`}
        >
            <select
                data-testid="FormSelect"
                className={selectClassNames}
                ref={innerRef}
                size={_innerSelectSize}
                {...rest}
            ></select>
        </div>
    );
};

export default forwardRef<HTMLSelectElement, Parameters<typeof FormSelect>[0]>(
    (props, ref) => {
        return <FormSelect {...props} innerRef={ref} />;
    }
);

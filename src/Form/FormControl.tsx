import React from 'react';
import { foldClassNames } from '../utilities/listUtils';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormControlProps } from './Form.types';
import useFormFieldContext from './useFormFieldContext';

const FormControl: React.FC<FormControlProps> = ({
    iconAlignment = [],
    isExpanded = false,
    isFullwidth = false,
    isLoading = false,
    ...props
}) => {
    const context = useFormFieldContext();
    const { classNames, rest } = useInnerBulmaProps(
        props,
        foldClassNames(iconAlignment) ?? '',
        isExpanded || isFullwidth ? 'is-expanded' : '',
        isLoading ? 'is-loading' : '',
        context.size ?? ''
    );

    return (
        <div
            data-testid="FormControl"
            className={`control ${classNames}`}
            {...rest}
        ></div>
    );
};

export default FormControl;

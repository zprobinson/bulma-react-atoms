import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormFieldLabelProps } from './Form.types';
import useFormFieldContext from './useFormFieldContext';

const FormFieldLabel: React.FC<FormFieldLabelProps> = ({ size, ...props }) => {
    const context = useFormFieldContext();
    const { classNames, rest } = useInnerBulmaProps(
        props,
        size ?? context.size ?? ''
    );
    return (
        <label
            data-testid="FormFieldLabel"
            className={`label ${classNames}`}
            {...rest}
        ></label>
    );
};

export default FormFieldLabel;

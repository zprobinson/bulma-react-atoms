import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormFieldLabelProps } from './Form.types';
import useFormFieldContext from './useFormFieldContext';

const FormFieldLabel: React.FC<FormFieldLabelProps> = (props) => {
    const { isHorizontal = false } = useFormFieldContext();
    return isHorizontal ? (
        <FormFieldLabelHorizontal {...props} />
    ) : (
        <FormFieldLabelVertical {...props} />
    );
};

const FormFieldLabelVertical: React.FC<FormFieldLabelProps> = ({
    size,
    ...props
}) => {
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

const FormFieldLabelHorizontal: React.FC<FormFieldLabelProps> = ({
    size,
    ...props
}) => {
    const context = useFormFieldContext();
    const { classNames, rest } = useInnerBulmaProps(
        props,
        size ?? context.size ?? 'is-normal'
    );
    return (
        <div
            data-testid="FormFieldLabelHorizontal"
            className={`field-label ${classNames}`}
        >
            <label
                data-testid="FormFieldLabel"
                className="label"
                {...rest}
            ></label>
        </div>
    );
};

export default FormFieldLabel;

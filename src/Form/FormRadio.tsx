import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormRadioProps } from './Form.types';

const FormRadio: React.FC<FormRadioProps> = ({
    children,
    _innerDisabledColor,
    _innerRadioClassName,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <label
            data-testid="FormRadioLabel"
            className={`radio ${classNames}`}
            style={{
                cursor: props.disabled ? 'not-allowed' : undefined,
                /* `disabled` is not a valid property on labels.
                 * We manually set the disabled text color here.
                 * Override with _innerDisabledColor or custom style rule. */
                color: props.disabled
                    ? _innerDisabledColor ?? '#7a7a7a'
                    : undefined,
            }}
        >
            <input
                type="radio"
                data-testid="FormRadio"
                className={_innerRadioClassName}
                {...rest}
            />
            {children}
        </label>
    );
};

export default FormRadio;

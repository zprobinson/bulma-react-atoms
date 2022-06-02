import React, { forwardRef } from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormCheckboxProps } from './Form.types';

const FormCheckbox: React.FC<
    FormCheckboxProps & { innerRef?: React.Ref<HTMLInputElement> }
> = ({
    children,
    _innerDisabledColor,
    _innerCheckboxClassName,
    innerRef,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <label
            data-testid="FormCheckboxLabel"
            className={`checkbox ${classNames}`}
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
                type="checkbox"
                data-testid="FormCheckbox"
                className={_innerCheckboxClassName}
                ref={innerRef}
                {...rest}
            />
            {children}
        </label>
    );
};

export default forwardRef<HTMLInputElement, Parameters<typeof FormCheckbox>[0]>(
    (props, ref) => {
        return <FormCheckbox {...props} innerRef={ref} />;
    }
);

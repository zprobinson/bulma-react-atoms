import React from 'react';
import { foldClassNames } from '../utilities/listUtils';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { ButtonDefault, ButtonProps } from './Button.types';

const _default_element_ = 'button';

const Button = <E extends React.ElementType = ButtonDefault>({
    as,
    color,
    size,
    state,
    modifiers = [],
    isLoading = false,
    isSelected = false,
    isResponsive = false,
    ...props
}: ButtonProps<E>) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        color ?? '',
        size ?? '',
        state ?? '',
        foldClassNames(modifiers),
        isLoading ? 'is-loading' : '',
        isSelected ? 'is-selected' : '',
        isResponsive ? 'is-responsive' : ''
    );
    const Component = as ?? _default_element_;

    return (
        <Component
            data-testid="Button"
            className={`button ${classNames}`}
            {...rest}
        ></Component>
    );
};

export default Button;

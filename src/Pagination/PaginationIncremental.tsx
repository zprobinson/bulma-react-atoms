import React, { useMemo } from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import {
    PaginationIncrementalProps,
    PaginationIncrementalDefault,
} from './Pagination.types';
import { id } from '../utilities/functionalUtils';

const _default_element_: React.ElementType = 'a';

const PaginationIncremental = <
    E extends React.ElementType = PaginationIncrementalDefault
>({
    as,
    isDisabled = false,
    disabled,
    paginationType,
    onClick,
    ...props
}: PaginationIncrementalProps<E>) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isDisabled ? 'is-disabled' : ''
    );

    // no-op to prevent onClick from being called if disabled style is active
    const optionalOnClick = useMemo(() => {
        return isDisabled || disabled ? id : onClick;
    }, [isDisabled, disabled, onClick]);

    const Component = as ?? _default_element_;

    return (
        <Component
            data-testid="PaginationIncremental"
            className={`pagination-${paginationType} ${classNames}`}
            aria-label={`Go to ${paginationType} page.`}
            onClick={optionalOnClick}
            disabled={disabled || isDisabled}
            {...rest}
        ></Component>
    );
};

export default PaginationIncremental;

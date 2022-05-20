import React, { useMemo } from 'react';
import { id } from '../utilities/functionalUtils';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PaginationLinkProps, PaginationLinkDefault } from './Pagination.types';

const _default_element_: React.ElementType = 'a';

const PaginationLink = <E extends React.ElementType = PaginationLinkDefault>({
    as,
    isCurrent,
    isDisabled,
    disabled,
    innerListItemProps,
    onClick,
    ...props
}: PaginationLinkProps<E>) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isCurrent ? 'is-current' : '',
        isDisabled ? 'is-disabled' : ''
    );

    // no-op to prevent onClick from being called if disabled style is active
    const optionalOnClick = useMemo(() => {
        return isDisabled || disabled ? id : onClick;
    }, [isDisabled, disabled, onClick]);

    const Component = as ?? _default_element_;

    return (
        <li {...innerListItemProps}>
            <Component
                data-testid="PaginationLink"
                className={`pagination-link ${classNames}`}
                disabled={disabled || isDisabled}
                onClick={optionalOnClick}
                {...rest}
            ></Component>
        </li>
    );
};

export default PaginationLink;

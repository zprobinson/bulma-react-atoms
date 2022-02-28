import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PaginationIncrementalProps } from './Pagination.types';

const PaginationIncremental: React.FC<PaginationIncrementalProps> = ({
    isDisabled = false,
    paginationType,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isDisabled ? 'is-disabled' : ''
    );
    return (
        <a
            data-testid="PaginationIncremental"
            className={`pagination-${paginationType} ${classNames}`}
            aria-label={`Go to ${paginationType} page.`}
            {...rest}
        ></a>
    );
};

export default PaginationIncremental;

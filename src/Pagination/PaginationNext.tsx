import React from 'react';
import { PaginationPreviousProps } from './Pagination.types';
import PaginationIncremental from './PaginationIncremental';

const _default_element_: React.ElementType = 'a';

const PaginationNext = <
    E extends React.ElementType = typeof _default_element_
>({
    children,
    ...props
}: PaginationPreviousProps<E>) => {
    return (
        <PaginationIncremental
            data-testid="PaginationNext"
            paginationType="next"
            {...props}
        >
            {children ?? 'Next page'}
        </PaginationIncremental>
    );
};

export default PaginationNext;

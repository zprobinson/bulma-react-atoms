import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PaginationListProps } from './Pagination.types';

const PaginationList: React.FC<PaginationListProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <ul
            data-testid="PaginationList"
            className={`pagination-list ${classNames}`}
            {...rest}
        ></ul>
    );
};

export default PaginationList;

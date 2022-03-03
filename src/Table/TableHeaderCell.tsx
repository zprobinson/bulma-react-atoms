import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TableHeaderCellProps } from './Table.types';

const TableHeaderCell: React.FC<TableHeaderCellProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <th data-testid="TableHeaderCell" className={classNames} {...rest}></th>
    );
};

export default TableHeaderCell;

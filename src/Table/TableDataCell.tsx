import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TableDataCellProps } from './Table.types';

const TableDataCell: React.FC<TableDataCellProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <td data-testid="TableDataCell" className={classNames} {...rest}></td>
    );
};

export default TableDataCell;

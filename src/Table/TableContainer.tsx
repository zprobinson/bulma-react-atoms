import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TableContainerProps } from './Table.types';

const TableContainer: React.FC<TableContainerProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="TableContainer"
            className={`table-container ${classNames}`}
            {...rest}
        ></div>
    );
};

export default TableContainer;

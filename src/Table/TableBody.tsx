import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TableBodyProps } from './Table.types';

const TableBody: React.FC<TableBodyProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <tbody data-testid="TableBody" className={classNames} {...rest}></tbody>
    );
};

export default TableBody;

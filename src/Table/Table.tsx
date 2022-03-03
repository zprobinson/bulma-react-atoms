import React from 'react';
import { foldClassNames } from '../utilities/listUtils';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TableProps } from './Table.types';

const Table: React.FC<TableProps> = ({ modifiers = '', ...props }) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        foldClassNames(modifiers)
    );

    return (
        <table
            data-testid="Table"
            className={`table ${classNames}`}
            {...rest}
        ></table>
    );
};

export default Table;

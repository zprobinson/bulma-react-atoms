import React from 'react';
import { foldClassNames } from '../utilities/listUtils';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TableProps } from './Table.types';

const Table: React.FC<TableProps> = ({
    modifiers = '',
    isBordered = false,
    isStriped = false,
    isFullwidth = false,
    isHoverable = false,
    isNarrow = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        foldClassNames(modifiers),
        isBordered ? 'is-bordered' : '',
        isStriped ? 'is-striped' : '',
        isFullwidth ? 'is-fullwidth' : '',
        isHoverable ? 'is-hoverable' : '',
        isNarrow ? 'is-narrow' : ''
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

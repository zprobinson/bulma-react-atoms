import React from 'react';
import { foldClassNames } from '../utilities/listUtils';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { ColumnProps } from './Column.types';

const Column: React.FC<ColumnProps> = ({
    columnSize,
    offset,
    narrow,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        foldClassNames(columnSize ?? ''),
        foldClassNames(offset ?? ''),
        foldClassNames(narrow ?? '')
    );
    return (
        <div
            data-testid="Column"
            className={`column ${classNames}`}
            {...rest}
        ></div>
    );
};

export default Column;

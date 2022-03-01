import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TableHeaderProps } from './Table.types';

const TableHeader: React.FC<TableHeaderProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <thead
            data-testid="TableHeader"
            className={classNames}
            {...rest}
        ></thead>
    );
};

export default TableHeader;

import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TableFooterProps } from './Table.types';

const TableFooter: React.FC<TableFooterProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <tfoot
            data-testid="TableFooter"
            className={classNames}
            {...rest}
        ></tfoot>
    );
};

export default TableFooter;

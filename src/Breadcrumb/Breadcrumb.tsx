import React from 'react';

import { BreadcrumbProps } from './Breadcrumb.types';
import { useInnerBulmaProps } from '../utilities/propUtilities';

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    children,
    alignment,
    separator,
    size,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        alignment ?? '',
        separator ?? '',
        size ?? ''
    );

    return (
        <nav
            data-testid="Breadcrumb"
            className={`breadcrumb ${classNames}`}
            {...rest}
        >
            <ul>{children}</ul>
        </nav>
    );
};

export default Breadcrumb;

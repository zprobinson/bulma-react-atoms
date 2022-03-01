import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { BreadcrumbItemProps } from './Breadcrumb.types';

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
    isActive = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isActive ? 'is-active' : ''
    );

    return (
        <li data-testid="BreadcrumbItem" className={classNames} {...rest}></li>
    );
};

export default BreadcrumbItem;

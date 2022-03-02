import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { DropdownContentProps } from './Dropdown.types';

const DropdownContent: React.FC<DropdownContentProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="DropdownContent"
            className={`dropdown-content ${classNames}`}
            {...rest}
        ></div>
    );
};

export default DropdownContent;

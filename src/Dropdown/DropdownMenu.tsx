import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { DropdownMenuProps } from './Dropdown.types';

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="DropdownMenu"
            className={`dropdown-menu ${classNames}`}
            role="menu"
            {...rest}
        ></div>
    );
};

export default DropdownMenu;

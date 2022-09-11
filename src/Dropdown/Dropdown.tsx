import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({
    isActive = false,
    isHoverable = false,
    isRightAligned = false,
    isUp = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isActive ? 'is-active' : '',
        isHoverable ? 'is-hoverable' : '',
        isRightAligned ? 'is-right' : '',
        isUp ? 'is-up' : ''
    );
    return (
        <div
            data-testid="Dropdown"
            className={`dropdown ${classNames}`}
            {...rest}
        ></div>
    );
};

export default Dropdown;

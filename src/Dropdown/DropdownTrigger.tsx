import React from 'react';
import { DropdownTriggerProps } from '.';
import { useInnerBulmaProps } from '../utilities/propUtilities';

const DropdownTrigger: React.FC<DropdownTriggerProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="DropdownTrigger"
            className={`dropdown-trigger ${classNames}`}
            {...rest}
        ></div>
    );
};

export default DropdownTrigger;

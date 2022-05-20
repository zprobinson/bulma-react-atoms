import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { DropdownItemProps, DropdownItemDefault } from './Dropdown.types';

const _default_element_ = 'a';

const DropdownItem = <E extends React.ElementType = DropdownItemDefault>({
    as,
    isActive = false,
    ...props
}: DropdownItemProps<E>) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isActive ? 'is-active' : ''
    );
    const Component = as ?? _default_element_;

    return (
        <Component
            data-testid="DropdownItem"
            className={`dropdown-item ${classNames}`}
            {...rest}
        ></Component>
    );
};

export default DropdownItem;

import React, { forwardRef } from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<
    DropdownProps & { innerRef?: React.Ref<HTMLDivElement> }
> = ({
    isActive = false,
    isHoverable = false,
    isRightAligned = false,
    isUp = false,
    innerRef,
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
            ref={innerRef}
            {...rest}
        ></div>
    );
};

export default forwardRef<HTMLDivElement, Parameters<typeof Dropdown>[0]>(
    (props, ref) => {
        return <Dropdown {...props} innerRef={ref} />;
    }
);

import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TabsProps } from './Tabs.types';

const Tabs: React.FC<TabsProps> = ({
    alignment,
    size,
    isBoxed = false,
    isToggle = false,
    isToggleRounded = false,
    isFullwidth = false,
    ...props
}) => {
    const toggled = isToggleRounded
        ? 'is-toggle is-toggle-rounded'
        : isToggle
        ? 'is-toggle'
        : '';
    const { classNames, rest } = useInnerBulmaProps(
        props,
        alignment ?? '',
        size ?? '',
        isBoxed ? 'is-boxed' : '',
        toggled,
        isFullwidth ? 'is-fullwidth' : ''
    );

    return (
        <div
            data-testid="Tabs"
            className={`tabs ${classNames}`}
            {...rest}
        ></div>
    );
};

export default Tabs;

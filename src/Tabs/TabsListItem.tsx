import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TabsListItemProps } from './Tabs.types';

/**
 * _TabsListItem_ is only intended for use if you need to manually set the
 * inner anchor tag as a specialized component such as _NavLink_ from _react-router_.
 * In all other cases use the _TabsLink_ component.
 * \
 * \
 * If you need to customize the props for the
 * embedded list item component in the _TabsLink_ component,
 * use the given _innerListItemProps_ prop instead.
 * @see TabsLink
 */
const TabsListItem: React.FC<TabsListItemProps> = ({
    isActive = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isActive ? 'is-active' : ''
    );

    return (
        <li data-testid="TabsListItem" className={classNames} {...rest}></li>
    );
};

export default TabsListItem;

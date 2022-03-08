import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { MenuListItemProps } from './Menu.types';

const _default_element_ = 'a';

const MenuListItem = <E extends React.ElementType = typeof _default_element_>({
    as,
    isActive = false,
    _innerListItemProps,
    ...props
}: MenuListItemProps<E>) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isActive ? 'is-active' : ''
    );
    const Component = as ?? _default_element_;

    const { classNames: liClassNames, rest: liRest } = useInnerBulmaProps(
        _innerListItemProps ?? {}
    );

    return (
        <li data-testid="MenuListItem" className={liClassNames} {...liRest}>
            <Component
                data-testid="MenuListItemAnchor"
                className={classNames}
                {...rest}
            ></Component>
        </li>
    );
};

export default MenuListItem;

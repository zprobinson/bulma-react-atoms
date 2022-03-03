import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { MenuLinkProps } from './Menu.types';

/**
 * For _\<Menu\>_ to work appropriately, the _\<MenuLink\>_ should be a child of an _\<li\>_ tag which is itself a child of the _\<MenuList\>_ component.\
 * This functionality is built-in to the _\<MenuListItem\>_ component by default, but there may be cases where finer control is needed and
 * the developer wants to treat the _\<li\>_ and the _\<MenuLink\>_ separately.\
 * \
 * This component should be saved solely for those rare circumstances. Use the _\<MenuListItem\>_ if the finer control is not needed.
 * @see {@link [Bulma Menu Documentation](https//bulma.io/documentation/components/menu)}
 */
const MenuLink: React.FC<MenuLinkProps> = ({ isActive = false, ...props }) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isActive ? 'is-active' : ''
    );

    return <a data-testid="MenuLink" className={classNames} {...rest}></a>;
};

export default MenuLink;

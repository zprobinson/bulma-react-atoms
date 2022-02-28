import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { NavbarMenuProps } from './Navbar.types';

const NavbarMenu: React.FC<NavbarMenuProps> = ({
    isActive = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isActive ? 'is-active' : ''
    );
    return (
        <div
            data-testid="NavbarMenu"
            className={`navbar-menu ${classNames}`}
            {...rest}
        ></div>
    );
};

export default NavbarMenu;

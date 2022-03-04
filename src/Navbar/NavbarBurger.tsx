import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { NavbarBurgerProps } from './Navbar.types';

const NavbarBurger: React.VFC<NavbarBurgerProps> = ({
    isActive = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isActive ? 'is-active' : ''
    );

    return (
        <a
            data-testid="NavbarBurger"
            className={`navbar-burger ${classNames}`}
            aria-label="menu"
            aria-expanded={isActive ? 'true' : 'false'}
            {...rest}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    );
};

export default NavbarBurger;

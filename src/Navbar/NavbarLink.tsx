import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { NavbarLinkProps } from './Navbar.types';

const NavbarLink: React.FC<NavbarLinkProps> = ({
    isArrowless = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isArrowless ? 'is-arrowless' : ''
    );
    return (
        <a
            data-testid="NavbarLink"
            className={`navbar-link ${classNames}`}
            {...rest}
        ></a>
    );
};

export default NavbarLink;

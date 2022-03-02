import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { NavbarBrandProps } from './Navbar.types';

const NavbarBrand: React.FC<NavbarBrandProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="NavbarBrand"
            className={`navbar-brand ${classNames}`}
            {...rest}
        ></div>
    );
};

export default NavbarBrand;

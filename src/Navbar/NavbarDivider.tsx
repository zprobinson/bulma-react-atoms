import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { NavbarDividerProps } from './Navbar.types';

const NavbarDivider: React.VFC<NavbarDividerProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <hr
            data-testid="NavbarDivider"
            className={`navbar-divider ${classNames}`}
            {...rest}
        />
    );
};

export default NavbarDivider;

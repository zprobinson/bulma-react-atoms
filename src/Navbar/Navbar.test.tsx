import React from 'react';
import { render } from '@testing-library/react';

import Navbar from './Navbar';
import NavbarBrand from './NavbarBrand';
import NavbarDropdown from './NavbarDropdown';
import NavbarItem from './NavbarItem';
import NavbarLink from './NavbarLink';
import NavbarMenu from './NavbarMenu';
import NavbarMenuStart from './NavbarMenuStart';
import NavbarMenuEnd from './NavbarMenuEnd';
import {
    NavbarProps,
    NavbarBrandProps,
    NavbarDropdownProps,
    NavbarItemProps,
    NavbarLinkProps,
    NavbarMenuProps,
    NavbarMenuStartProps,
    NavbarMenuEndProps,
} from './Navbar.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';
import { NavbarBurgerProps } from './Navbar.types';
import NavbarBurger from './NavbarBurger';

describe('Navbar Component', () => {
    const renderComponent = (props: NavbarProps) =>
        render(<Navbar {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Navbar');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Navbar', renderComponent);
});

describe('Navbar Brand Component', () => {
    const renderComponent = (props: NavbarBrandProps) =>
        render(<NavbarBrand {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('NavbarBrand');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarBrand', renderComponent);
});

describe('Navbar Burger Component', () => {
    const renderComponent = (props: NavbarBurgerProps) =>
        render(<NavbarBurger {...props} />);

    it('should render as an <a> tag by default', () => {
        const { getByTestId } = renderComponent({});

        const component = getByTestId('NavbarBurger');

        expect(component.tagName).toMatch(/a/i);
    });

    it('should have navbar-burger class embedded', () => {
        const expected = 'navbar-burger';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('NavbarBurger');

        expect(component).toHaveClass(expected);
    });

    it('should have is-active class when provided', () => {
        const isActive: NavbarBurgerProps['isActive'] = true;
        const expected = 'is-active';
        const { getByTestId } = renderComponent({ isActive });

        const component = getByTestId('NavbarBurger');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('NavbarBurger', renderComponent);
});

describe('Navbar Link Component', () => {
    const renderComponent = (props: NavbarLinkProps) =>
        render(<NavbarLink {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('NavbarLink');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarLink', renderComponent);
});

describe('Navbar Menu Component', () => {
    const renderComponent = (props: NavbarMenuProps) =>
        render(<NavbarMenu {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('NavbarMenu');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarMenu', renderComponent);
});

describe('Navbar Menu Start Component', () => {
    const renderComponent = (props: NavbarMenuStartProps) =>
        render(<NavbarMenuStart {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('NavbarMenuStart');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarMenuStart', renderComponent);
});

describe('Navbar Menu End Component', () => {
    const renderComponent = (props: NavbarMenuEndProps) =>
        render(<NavbarMenuEnd {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('NavbarMenuEnd');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarMenuEnd', renderComponent);
});

describe('Navbar Item Component', () => {
    const renderComponent = <E extends React.ElementType = React.ElementType>(
        props: NavbarItemProps<E>
    ) => render(<NavbarItem {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('NavbarItem');

        expect(component).toHaveTextContent(expected);
    });

    it('should have navbar-item class', () => {
        const expected = 'navbar-item';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('NavbarItem');

        expect(component).toHaveClass(expected);
    });

    it('should render as a div tag', () => {
        const { getByTestId } = renderComponent({});

        const component = getByTestId('NavbarItem');

        expect(component.tagName).toMatch(/div/i);
    });

    it('should render as an anchor tag', () => {
        const { getByTestId } = renderComponent({ as: 'a', href: 'test' });

        const component = getByTestId('NavbarItem');

        expect(component.tagName).toMatch(/a/i);
    });

    testBulmaProps('NavbarItem', renderComponent);
});

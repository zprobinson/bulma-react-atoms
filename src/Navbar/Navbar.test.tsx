import React from 'react';
import { render, screen } from '@testing-library/react';

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
    NavbarItemDefault,
} from './Navbar.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';
import { NavbarBurgerProps } from './Navbar.types';
import NavbarBurger from './NavbarBurger';

describe('Navbar Component', () => {
    const TEST_ID = 'Navbar';

    const renderComponent = (props: NavbarProps) =>
        render(<Navbar {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveTextContent(expected);
    });

    it('should have color class when provided', () => {
        const expected: NavbarProps['color'] = 'is-danger';
        renderComponent({ color: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have transparent class when provided', () => {
        const expected = 'is-transparent';
        renderComponent({ isTransparent: true });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have fixed class when provided', () => {
        const expected: NavbarProps['isFixedHtmlInterop'] = 'is-fixed-top';
        renderComponent({ isFixedHtmlInterop: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have modifier classes when provided', () => {
        const expected: NavbarProps['modifiers'] = ['is-spaced', 'has-shadow'];
        renderComponent({ modifiers: expected });

        const component = screen.getByTestId(TEST_ID);

        expected.forEach(expected => expect(component).toHaveClass(expected));
    });

    testBulmaProps('Navbar', renderComponent);
});

describe('Navbar Brand Component', () => {
    const renderComponent = (props: NavbarBrandProps) =>
        render(<NavbarBrand {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('NavbarBrand');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarBrand', renderComponent);
});

describe('Navbar Burger Component', () => {
    const renderComponent = (props: NavbarBurgerProps) =>
        render(<NavbarBurger {...props} />);

    it('should render as an <a> tag by default', () => {
        renderComponent({});

        const component = screen.getByTestId('NavbarBurger');

        expect(component.tagName).toMatch(/a/i);
    });

    it('should have navbar-burger class embedded', () => {
        const expected = 'navbar-burger';
        renderComponent({});

        const component = screen.getByTestId('NavbarBurger');

        expect(component).toHaveClass(expected);
    });

    it('should have is-active class when provided', () => {
        const isActive: NavbarBurgerProps['isActive'] = true;
        const expected = 'is-active';
        renderComponent({ isActive });

        const component = screen.getByTestId('NavbarBurger');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('NavbarBurger', renderComponent);
});

describe('Navbar Link Component', () => {
    const renderComponent = (props: NavbarLinkProps) =>
        render(<NavbarLink {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('NavbarLink');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarLink', renderComponent);
});

describe('Navbar Menu Component', () => {
    const renderComponent = (props: NavbarMenuProps) =>
        render(<NavbarMenu {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('NavbarMenu');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarMenu', renderComponent);
});

describe('Navbar Menu Start Component', () => {
    const renderComponent = (props: NavbarMenuStartProps) =>
        render(<NavbarMenuStart {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('NavbarMenuStart');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarMenuStart', renderComponent);
});

describe('Navbar Menu End Component', () => {
    const renderComponent = (props: NavbarMenuEndProps) =>
        render(<NavbarMenuEnd {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('NavbarMenuEnd');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('NavbarMenuEnd', renderComponent);
});

describe('Navbar Item Component', () => {
    const renderComponent = <E extends React.ElementType = NavbarItemDefault>(
        props: NavbarItemProps<E>
    ) => render(<NavbarItem<E> {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('NavbarItem');

        expect(component).toHaveTextContent(expected);
    });

    it('should have navbar-item class', () => {
        const expected = 'navbar-item';
        renderComponent({});

        const component = screen.getByTestId('NavbarItem');

        expect(component).toHaveClass(expected);
    });

    it('should render as a div tag', () => {
        renderComponent({});

        const component = screen.getByTestId('NavbarItem');

        expect(component.tagName).toMatch(/div/i);
    });

    it('should render as an anchor tag', () => {
        renderComponent({ as: 'a', href: 'test' });

        const component = screen.getByTestId('NavbarItem');

        expect(component.tagName).toMatch(/a/i);
    });

    testBulmaProps('NavbarItem', renderComponent);
});

describe('Navbar Dropdown Component', () => {
    const renderComponent = (props: NavbarDropdownProps) =>
        render(<NavbarDropdown {...props} />);

    const TEST_ID = 'NavbarDropdown';

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByText(expected);

        expect(component).toBeInTheDocument();
    });

    it("should'nt have is-boxed as a default", () => {
        const redHerring = 'is-boxed';
        renderComponent({});

        const component = screen.getByTestId(TEST_ID);

        expect(component).not.toHaveClass(redHerring);
    });

    it('should have is-boxed class when provided', () => {
        const expected = 'is-boxed';
        renderComponent({ isBoxed: true });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it("shouldn't have is-right as a default", () => {
        const redHerring = 'is-right';
        renderComponent({});

        const component = screen.getByTestId(TEST_ID);

        expect(component).not.toHaveClass(redHerring);
    });

    it('should have is-right class when provided', () => {
        const expected = 'is-right';
        renderComponent({ isRight: true });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    testBulmaProps(TEST_ID, renderComponent);
});

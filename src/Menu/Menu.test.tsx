import React from 'react';
import { render, screen } from '@testing-library/react';

import Menu from './Menu';
import MenuLabel from './MenuLabel';
import MenuList from './MenuList';
import MenuListItem from './MenuListItem';
import {
    MenuLabelProps,
    MenuListItemProps,
    MenuListProps,
    MenuProps,
    MenuListItemDefault,
} from './Menu.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Menu Component', () => {
    const renderComponent = (props: MenuProps) => render(<Menu {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Menu');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Menu', renderComponent);
});

describe('Menu Label Component', () => {
    const renderComponent = (props: MenuLabelProps) =>
        render(<MenuLabel {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MenuLabel');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('MenuLabel', renderComponent);
});

describe('Menu List Component', () => {
    const renderComponent = (props: MenuListProps) =>
        render(<MenuList {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MenuList');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('MenuList', renderComponent);
});

describe('Menu List Item Component', () => {
    const renderComponent = <E extends React.ElementType = MenuListItemDefault>(
        props: MenuListItemProps<E>
    ) => render(<MenuListItem<E> {...props} />);
    const renderListParent = <E extends React.ElementType = 'a'>(
        props: MenuListItemProps<E>['_innerListItemProps']
    ) => render(<MenuListItem _innerListItemProps={props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: expected,
            isActive: false,
        });

        const component = screen.getByTestId('MenuListItem');

        expect(component).toHaveTextContent(expected);
    });

    it('should render as a tag by default', () => {
        renderComponent({ href: '' });

        const component = screen.getByTestId('MenuListItemAnchor');

        expect(component.tagName).toMatch(/a/i);
    });

    it('should render as div tag when provided', () => {
        renderComponent({ as: 'div' });

        const component = screen.getByTestId('MenuListItemAnchor');

        expect(component.tagName).toMatch(/div/i);
    });

    // In this component, bulma styles are applied to the child anchor tag.
    testBulmaProps('MenuListItemAnchor', renderComponent);
    testBulmaProps('MenuListItem', renderListParent);
});

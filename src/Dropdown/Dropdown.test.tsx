import React from 'react';
import { render, screen } from '@testing-library/react';

import Dropdown from './Dropdown';
import DropdownContent from './DropdownContent';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownTrigger from './DropdownTrigger';
import {
    DropdownContentProps,
    DropdownMenuProps,
    DropdownProps,
    DropdownTriggerProps,
    DropdownItemProps,
    DropdownItemDefault,
} from './Dropdown.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Dropdown Component', () => {
    const renderComponent = (props: DropdownProps) =>
        render(<Dropdown {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Dropdown');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Dropdown', renderComponent);
});

describe('Dropdown Content Component', () => {
    const renderComponent = (props: DropdownContentProps) =>
        render(<DropdownContent {...props} />);

    it('should render children correctly', () => {
        const expected = 'some text';
        renderComponent({ children: expected });

        const component = screen.getByTestId('DropdownContent');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('DropdownContent', renderComponent);
});

describe('Dropdown Menu Component', () => {
    const renderComponent = (props: DropdownMenuProps) =>
        render(<DropdownMenu {...props} />);

    it('should render children correctly', () => {
        const expected = 'some text';
        renderComponent({ children: expected });

        const component = screen.getByTestId('DropdownMenu');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('DropdownMenu', renderComponent);
});

describe('Dropdown Trigger Component', () => {
    const renderComponent = (props: DropdownTriggerProps) =>
        render(<DropdownTrigger {...props} />);

    it('should render children correctly', () => {
        const expected = 'some text';
        renderComponent({ children: expected });

        const component = screen.getByTestId('DropdownTrigger');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('DropdownTrigger', renderComponent);
});

describe('Dropdown Item Component', () => {
    const renderComponent = <E extends React.ElementType = DropdownItemDefault>(
        props: DropdownItemProps<E>
    ) => render(<DropdownItem<E> {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('DropdownItem');

        expect(component).toHaveTextContent(expected);
    });

    it('should have dropdown-item class', () => {
        const expected = 'dropdown-item';
        renderComponent({});

        const component = screen.getByTestId('DropdownItem');

        expect(component).toHaveClass(expected);
    });

    it('should render as an anchor tag', () => {
        renderComponent({ href: 'test ' });

        const component = screen.getByTestId('DropdownItem');

        expect(component.tagName).toMatch(/a/i);
    });

    it('should render as a div tag', () => {
        renderComponent({ as: 'div' });

        const component = screen.getByTestId('DropdownItem');

        expect(component.tagName).toMatch(/div/i);
    });

    testBulmaProps('DropdownItem', renderComponent);
});

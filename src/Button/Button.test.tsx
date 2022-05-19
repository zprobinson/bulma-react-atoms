import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Button from './Button';
import Buttons from './Buttons';
import { ButtonProps, ButtonsProps } from './Button.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Button Component', () => {
    const renderComponent = (props: ButtonProps) =>
        render(<Button {...props} />);
    const TEST_ID = 'Button';

    it('should render children text correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveTextContent(expected);
    });

    it('should recognize a single click', () => {
        const onClick = jest.fn();
        renderComponent({ onClick });

        const button = screen.getByTestId(TEST_ID);
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should have color class when provided', () => {
        const expected: ButtonProps['color'] = 'is-danger';
        renderComponent({ color: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have size class when provided', () => {
        const expected: ButtonProps['size'] = 'is-large';
        renderComponent({ size: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have state class when provided', () => {
        const expected: ButtonProps['state'] = 'is-active';
        renderComponent({ state: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have one modifier class when provided as single string', () => {
        const expected: ButtonProps['modifiers'] = 'is-fullwidth';
        renderComponent({ modifiers: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have multiple modifier classes when provided as array', () => {
        const modifiers: ButtonProps['modifiers'] = [
            'is-fullwidth',
            'is-outlined',
            'is-rounded',
        ];
        const expected = 'is-fullwidth is-outlined is-rounded';
        renderComponent({ modifiers });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have is-loading class when provided', () => {
        const isLoading: ButtonProps['isLoading'] = true;
        const expected = 'is-loading';
        renderComponent({ isLoading });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have is-selected class when provided', () => {
        const isSelected: ButtonProps['isSelected'] = true;
        const expected = 'is-selected';
        renderComponent({ isSelected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have is-responsive class when provided', () => {
        const isResponsive: ButtonProps['isResponsive'] = true;
        const expected = 'is-responsive';
        renderComponent({ size: 'is-large', isResponsive });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Button', renderComponent);
});

describe('Buttons Component', () => {
    const renderComponent = (props: ButtonsProps) =>
        render(<Buttons {...props} />);
    const TEST_ID = 'Buttons';

    it('should render children text correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveTextContent(expected);
    });

    it('should have embedded buttons class', () => {
        const expected = 'buttons';
        renderComponent({});

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have has-addons class when provided', () => {
        const expected = 'has-addons';
        const hasAddons: ButtonsProps['hasAddons'] = true;
        renderComponent({ hasAddons });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have alignment class when provided', () => {
        const expected: ButtonsProps['alignment'] = 'is-right';
        renderComponent({ alignment: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    testBulmaProps(TEST_ID, renderComponent);
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveTextContent(expected);
    });

    it('should recognize a single click', () => {
        const onClick = jest.fn();
        const { getByTestId } = renderComponent({ onClick });

        const button = getByTestId(TEST_ID);
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should have color class when provided', () => {
        const expected: ButtonProps['color'] = 'is-danger';
        const { getByTestId } = renderComponent({ color: expected });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have size class when provided', () => {
        const expected: ButtonProps['size'] = 'is-large';
        const { getByTestId } = renderComponent({ size: expected });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have state class when provided', () => {
        const expected: ButtonProps['state'] = 'is-active';
        const { getByTestId } = renderComponent({ state: expected });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have one modifier class when provided as single string', () => {
        const expected: ButtonProps['modifiers'] = 'is-fullwidth';
        const { getByTestId } = renderComponent({ modifiers: expected });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have multiple modifier classes when provided as array', () => {
        const modifiers: ButtonProps['modifiers'] = [
            'is-fullwidth',
            'is-outlined',
            'is-rounded',
        ];
        const expected = 'is-fullwidth is-outlined is-rounded';
        const { getByTestId } = renderComponent({ modifiers });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have is-loading class when provided', () => {
        const isLoading: ButtonProps['isLoading'] = true;
        const expected = 'is-loading';
        const { getByTestId } = renderComponent({ isLoading });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have is-selected class when provided', () => {
        const isSelected: ButtonProps['isSelected'] = true;
        const expected = 'is-selected';
        const { getByTestId } = renderComponent({ isSelected });

        const component = getByTestId(TEST_ID);

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
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveTextContent(expected);
    });

    it('should have embedded buttons class', () => {
        const expected = 'buttons';
        const { getByTestId } = renderComponent({});

        const component = getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have has-addons class when provided', () => {
        const expected = 'has-addons';
        const hasAddons: ButtonsProps['hasAddons'] = true;
        const { getByTestId } = renderComponent({ hasAddons });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it("should not have alignment class if has-addons is'nt provided", () => {
        const redHerring: ButtonsProps['alignment'] = 'is-centered';
        const { getByTestId } = renderComponent({ alignment: redHerring });

        const component = getByTestId(TEST_ID);

        expect(component).not.toHaveClass(redHerring);
    });

    it('should have alignment class if has-addons is provided', () => {
        const expected: ButtonsProps['alignment'] = 'is-right';
        const hasAddons: ButtonsProps['hasAddons'] = true;
        const { getByTestId } = renderComponent({
            alignment: expected,
            hasAddons,
        });

        const component = getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    testBulmaProps(TEST_ID, renderComponent);
});

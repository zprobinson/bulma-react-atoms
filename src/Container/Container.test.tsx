import React from 'react';
import { render, screen } from '@testing-library/react';

import Container from './Container';
import { ContainerProps } from './Container.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Container Component', () => {
    const renderComponent = (props: ContainerProps) =>
        render(<Container {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Container');

        expect(component).toHaveTextContent(expected);
    });

    it("should have class 'container'", () => {
        const expected = 'container';
        renderComponent({});

        const component = screen.getByTestId('Container');

        expect(component).toHaveClass(expected);
    });

    it('should always render as a div tag', () => {
        renderComponent({});

        const component = screen.getByTestId('Container');

        expect(component.tagName).toMatch(/div/i);
    });

    it('should be fluid container', () => {
        const expected: ContainerProps['isFluid'] = true;
        renderComponent({ isFluid: expected });

        const component = screen.getByTestId('Container');

        expect(component).toHaveClass('is-fluid');
    });

    it('should not be fluid container', () => {
        const expected: ContainerProps['isFluid'] = false;
        renderComponent({ isFluid: expected });

        const component = screen.getByTestId('Container');

        expect(component).not.toHaveClass('is-fluid');
    });

    it('should be widescreen container', () => {
        const expected: ContainerProps['breakpoint'] = 'is-widescreen';
        renderComponent({ breakpoint: expected });

        const component = screen.getByTestId('Container');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Container', renderComponent);
});

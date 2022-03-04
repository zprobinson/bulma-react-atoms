import React from 'react';
import { render, screen } from '@testing-library/react';

import Column from './Column';
import { ColumnProps } from './Column.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Column Component', () => {
    const renderComponent = (props: ColumnProps) =>
        render(<Column {...props} />);

    it('should render text correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Column');

        expect(component).toHaveTextContent(expected);
    });

    it('should have column class', () => {
        const expected = 'column';
        renderComponent({});

        const component = screen.getByTestId('Column');

        expect(component).toHaveClass(expected);
    });

    it('should be full size', () => {
        const expected: ColumnProps['columnSize'] = 'is-full';
        renderComponent({ columnSize: expected });

        const component = screen.getByTestId('Column');

        expect(component).toHaveClass(expected);
    });

    it('should be offset by half', () => {
        const expected: ColumnProps['offset'] = 'is-offset-half';
        renderComponent({ offset: expected });

        const component = screen.getByTestId('Column');

        expect(component).toHaveClass(expected);
    });

    it('should be narrow', () => {
        const expected: ColumnProps['narrow'] = 'is-narrow';
        renderComponent({ narrow: expected });

        const component = screen.getByTestId('Column');

        expect(component).toHaveClass(expected);
    });

    it('should always render as a div tag', () => {
        renderComponent({});

        const component = screen.getByTestId('Column');

        expect(component.tagName).toMatch(/div/i);
    });

    testBulmaProps('Column', renderComponent);
});

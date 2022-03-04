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

    testBulmaProps('Column', renderComponent);
});

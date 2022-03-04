import React from 'react';
import { render, screen } from '@testing-library/react';

import Block from './Block';
import { BlockProps } from './Block.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Block Component', () => {
    const renderComponent = (props: BlockProps) => render(<Block {...props} />);

    it('should render foo text correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Block');

        expect(component).toHaveTextContent(expected);
    });

    it('should have block class', () => {
        const expected = 'block';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('Block');

        expect(component).toHaveClass(expected);
    });

    it('should always render as a div tag', () => {
        const { getByTestId } = renderComponent({});

        const component = getByTestId('Block');

        expect(component.tagName).toMatch(/div/i);
    });

    testBulmaProps('Block', renderComponent);
});

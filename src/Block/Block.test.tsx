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

    testBulmaProps('Block', renderComponent);
});

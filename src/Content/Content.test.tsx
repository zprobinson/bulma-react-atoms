import React from 'react';
import { render, screen } from '@testing-library/react';

import Content from './Content';
import { ContentProps } from './Content.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Content Component', () => {
    const renderComponent = (props: ContentProps) =>
        render(<Content {...props} />);

    it('should render foo text correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Content');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Content', renderComponent);
});

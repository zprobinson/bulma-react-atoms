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

    testBulmaProps('Container', renderComponent);
});

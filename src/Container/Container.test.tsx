import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';
import { ContainerProps } from './Container.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Container Component', () => {
    const renderComponent = (props: ContainerProps) =>
        render(<Container {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Container');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Container', renderComponent);
});

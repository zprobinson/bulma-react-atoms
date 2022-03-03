import React from 'react';
import { render } from '@testing-library/react';

import Box from './Box';
import { BoxProps } from './Box.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Box Component', () => {
    const renderComponent = (props: BoxProps) => render(<Box {...props} />);

    it('should render children text correctly', () => {
        const expected = 'some text blah dee blah';

        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Box');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Box', renderComponent);
});

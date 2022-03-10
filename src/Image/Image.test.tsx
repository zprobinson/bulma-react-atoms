import React from 'react';
import { render, screen } from '@testing-library/react';

import Image from './Image';
import { ImageProps } from './Image.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Image Component', () => {
    const renderComponent = (props: ImageProps) => render(<Image {...props} />);

    it('should render foo text correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: expected,
            dimension: 'is-128x128',
        });

        const component = screen.getByTestId('Image');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Image', renderComponent);
});

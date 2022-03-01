import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';
import { FooterProps } from './Footer.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Footer Component', () => {
    const renderComponent = (props: FooterProps) =>
        render(<Footer {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Footer');

        expect(component).toHaveTextContent(expected);
    });

    it('should have the footer class', () => {
        const expected = 'footer';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('Footer');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Footer', renderComponent);
});

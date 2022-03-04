import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';
import { FooterProps } from './Footer.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Footer Component', () => {
    const renderComponent = (props: FooterProps) =>
        render(<Footer {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Footer');

        expect(component).toHaveTextContent(expected);
    });

    it('should have the footer class', () => {
        const expected = 'footer';
        renderComponent({});

        const component = screen.getByTestId('Footer');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Footer', renderComponent);
});

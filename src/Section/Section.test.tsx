import React from 'react';
import { render, screen } from '@testing-library/react';

import Section from './Section';
import { SectionProps } from './Section.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Section Component', () => {
    const renderComponent = (props: SectionProps) =>
        render(<Section {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Section');

        expect(component).toHaveTextContent(expected);
    });

    it('should have the section class', () => {
        const expected = 'section';
        renderComponent({ className: 'foo-bar' });

        const component = screen.getByTestId('Section');

        expect(component).toHaveClass(expected);
    });

    it('should have the appropriate size class', () => {
        const expected: SectionProps['size'] = 'is-large';
        renderComponent({
            className: 'foo-bar',
            size: expected,
        });

        const component = screen.getByTestId('Section');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Section', renderComponent);
});

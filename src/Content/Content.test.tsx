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

    it("should have class 'content'", () => {
        const expected = 'content';
        renderComponent({});

        const component = screen.getByTestId('Content');

        expect(component).toHaveClass(expected);
    });

    it('should always render as a div tag', () => {
        renderComponent({});

        const component = screen.getByTestId('Content');

        expect(component.tagName).toMatch(/div/i);
    });

    it('should have medium content size', () => {
        const expected: ContentProps['size'] = 'is-medium';
        renderComponent({ size: expected });

        const component = screen.getByTestId('Content');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Content', renderComponent);
});

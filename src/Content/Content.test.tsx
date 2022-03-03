import React from 'react';
import { render } from '@testing-library/react';

import Content from './Content';
import { ContentProps } from './Content.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Content Component', () => {
    const renderComponent = (props: ContentProps) =>
        render(<Content {...props} />);

    it('should render foo text correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Content');

        expect(component).toHaveTextContent(expected);
    });

    it("should have class 'content'", () => {
        const expected = 'content';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('Content');

        expect(component).toHaveClass(expected);
    });

    it('should always render as a div tag', () => {
        const { getByTestId } = renderComponent({});

        const component = getByTestId('Content');

        expect(component.tagName).toMatch(/div/i);
    });

    it('should have medium content size', () => {
        const expected: ContentProps['size'] = 'is-medium';
        const { getByTestId } = renderComponent({ size: expected });

        const component = getByTestId('Content');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Content', renderComponent);
});

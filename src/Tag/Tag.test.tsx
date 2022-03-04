import { render, screen } from '@testing-library/react';
import React from 'react';
import { testBulmaProps } from '../bulmaTests/bulmaTests';
import Tag from './Tag';
import { TagProps } from './Tag.types';
import Tags from './Tags';
import { TagsProps } from './Tags.types';

describe('Tags Component', () => {
    const renderComponent = (props: TagsProps) => render(<Tags {...props} />);

    it('should render children text correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Tags');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Tags', renderComponent);
});

describe('Tag Component', () => {
    const renderComponent = <E extends React.ElementType = React.ElementType>(
        props: TagProps<E>
    ) => render(<Tag {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Tag');

        expect(component).toHaveTextContent(expected);
    });

    it('should have tag class', () => {
        const expected = 'tag';
        renderComponent({});

        const component = screen.getByTestId('Tag');

        expect(component).toHaveClass(expected);
    });

    it('should have color class', () => {
        const expected: TagProps['color'] = 'is-primary is-light';
        renderComponent({ color: expected });

        const component = screen.getByTestId('Tag');

        expect(component).toHaveClass(expected);
    });

    it('should have size class', () => {
        const expected: TagProps['size'] = 'is-medium';
        renderComponent({ size: expected });

        const component = screen.getByTestId('Tag');

        expect(component).toHaveClass(expected);
    });

    it('should have is-delete class', () => {
        const expected = 'is-delete';
        const isDelete: TagProps['isDelete'] = true;
        renderComponent({ isDelete });

        const component = screen.getByTestId('Tag');

        expect(component).toHaveClass(expected);
    });

    it('should render as a span tag by default', () => {
        renderComponent({});

        const component = screen.getByTestId('Tag');

        expect(component.tagName).toMatch(/span/i);
    });

    it('should render as an anchor tag', () => {
        renderComponent({ as: 'a', href: 'test ' });

        const component = screen.getByTestId('Tag');

        expect(component.tagName).toMatch(/a/i);
    });

    testBulmaProps('Tag', renderComponent);
});

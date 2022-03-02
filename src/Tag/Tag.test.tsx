import { render } from '@testing-library/react';
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
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Tags');

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
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Tag');

        expect(component).toHaveTextContent(expected);
    });

    it('should have tag class', () => {
        const expected = 'tag';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('Tag');

        expect(component).toHaveClass(expected);
    });

    it('should have color class', () => {
        const expected: TagProps['color'] = 'is-primary is-light';
        const { getByTestId } = renderComponent({ color: expected });

        const component = getByTestId('Tag');

        expect(component).toHaveClass(expected);
    });

    it('should have size class', () => {
        const expected: TagProps['size'] = 'is-medium';
        const { getByTestId } = renderComponent({ size: expected });

        const component = getByTestId('Tag');

        expect(component).toHaveClass(expected);
    });

    it('should have is-delete class', () => {
        const expected = 'is-delete';
        const isDelete: TagProps['isDelete'] = true;
        const { getByTestId } = renderComponent({ isDelete });

        const component = getByTestId('Tag');

        expect(component).toHaveClass(expected);
    });

    it('should render as a span tag by default', () => {
        const { getByTestId } = renderComponent({});

        const component = getByTestId('Tag');

        expect(component.tagName).toMatch(/span/i);
    });

    it('should render as an anchor tag', () => {
        const { getByTestId } = renderComponent({ as: 'a', href: 'test ' });

        const component = getByTestId('Tag');

        expect(component.tagName).toMatch(/a/i);
    });

    testBulmaProps('Tag', renderComponent);
});

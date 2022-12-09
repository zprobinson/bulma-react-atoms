import React from 'react';
import { render, screen } from '@testing-library/react';

import MediaObject from './MediaObject';
import MediaLeft from './MediaLeft';
import MediaContent from './MediaContent';
import MediaRight from './MediaRight';
import {
    MediaObjectProps,
    MediaLeftProps,
    MediaContentProps,
    MediaRightProps,
} from './MediaObject.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Media Object Component', () => {
    const renderComponent = (props: MediaObjectProps) =>
        render(<MediaObject {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MediaObject');

        expect(component).toHaveTextContent(expected);
    });

    it("should render have class 'media'", () => {
        const expected = 'media';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MediaObject');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('MediaObject', renderComponent);
});

describe('Media Left Component', () => {
    const renderComponent = (props: MediaLeftProps) =>
        render(<MediaLeft {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MediaLeft');

        expect(component).toHaveTextContent(expected);
    });

    it("should render have class 'media-left'", () => {
        const expected = 'media-left';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MediaLeft');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('MediaLeft', renderComponent);
});

describe('Media Content Component', () => {
    const renderComponent = (props: MediaContentProps) =>
        render(<MediaContent {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MediaContent');

        expect(component).toHaveTextContent(expected);
    });

    it("should render have class 'media-content'", () => {
        const expected = 'media-content';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MediaContent');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('MediaContent', renderComponent);
});

describe('Media Right Component', () => {
    const renderComponent = (props: MediaRightProps) =>
        render(<MediaRight {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MediaRight');

        expect(component).toHaveTextContent(expected);
    });

    it("should render have class 'media-right'", () => {
        const expected = 'media-right';
        renderComponent({ children: expected });

        const component = screen.getByTestId('MediaRight');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('MediaRight', renderComponent);
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import Title from './Title';
import Subtitle from './Subtitle';
import { SubtitleProps, TitleProps } from './Title.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Title', () => {
    const renderComponent = (props: TitleProps) => render(<Title {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Title');

        expect(component).toHaveTextContent(expected);
    });

    it('should render as h3 tag by default', () => {
        renderComponent({});

        const component = screen.getByRole('heading', { level: 3 });

        expect(component).toBeInTheDocument();
    });

    it('should render as h1 tag', () => {
        const expected = '1';
        renderComponent({ size: expected });

        const component = screen.getByRole('heading', { level: 1 });

        expect(component).toBeInTheDocument();
    });

    it('should render as h5 tag', () => {
        const expected = '5';
        renderComponent({ size: expected });

        const component = screen.getByRole('heading', { level: 5 });

        expect(component).toBeInTheDocument();
    });

    testBulmaProps('Title', renderComponent);
});

describe('Subtitle', () => {
    const renderComponent = (props: SubtitleProps) =>
        render(<Subtitle {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Subtitle');

        expect(component).toHaveTextContent(expected);
    });

    it('should render as h3 tag by default', () => {
        renderComponent({});

        const component = screen.getByRole('heading', { level: 3 });

        expect(component).toBeInTheDocument();
    });

    it('should render as h1 tag', () => {
        const expected = '1';
        renderComponent({ size: expected });

        const component = screen.getByRole('heading', { level: 1 });

        expect(component).toBeInTheDocument();
    });

    it('should render as h5 tag', () => {
        const expected = '5';
        renderComponent({ size: expected });

        const component = screen.getByRole('heading', { level: 5 });

        expect(component).toBeInTheDocument();
    });

    testBulmaProps('Subtitle', renderComponent);
});

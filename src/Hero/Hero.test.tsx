import React from 'react';
import { render, screen } from '@testing-library/react';

import Hero from './Hero';
import HeroHeader from './HeroHeader';
import HeroBody from './HeroBody';
import HeroFooter from './HeroFooter';
import {
    HeroProps,
    HeroHeaderProps,
    HeroBodyProps,
    HeroFooterProps,
    __FULLHEIGHT_WITH_NAVBAR__,
} from './Hero.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Hero Component', () => {
    const renderComponent = (props: HeroProps) => render(<Hero {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Hero');

        expect(component).toHaveTextContent(expected);
    });

    it('should have hero class', () => {
        const expected = 'hero';
        renderComponent({ className: 'foo-bar' });

        const component = screen.getByTestId('Hero');

        expect(component).toHaveClass(expected);
    });

    it('should have given color class', () => {
        const expected: HeroProps['color'] = 'is-danger';
        renderComponent({
            color: expected,
            backgroundColor: 'has-background-danger',
        });

        const component = screen.getByTestId('Hero');

        expect(component).toHaveClass(expected);
    });

    it('should have given size class', () => {
        const expected: HeroProps['size'] = 'is-large';
        renderComponent({
            size: expected,
            textColor: 'has-text-black',
        });

        const component = screen.getByTestId('Hero');

        expect(component).toHaveClass(expected);
    });

    it('should have is-fullheight-with-navbar class', () => {
        const expected = __FULLHEIGHT_WITH_NAVBAR__;
        renderComponent({
            // this size should be overridden
            size: 'is-small',
            isFullHeightWithNavbar: true,
        });

        const component = screen.getByTestId('Hero');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Hero', renderComponent);
});

describe('Hero Header Component', () => {
    const renderComponent = (props: HeroHeaderProps) =>
        render(<HeroHeader {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('HeroHeader');

        expect(component).toHaveTextContent(expected);
    });

    it('should have hero-head class', () => {
        const expected = 'hero-head';
        renderComponent({ className: 'foo-bar' });

        const component = screen.getByTestId('HeroHeader');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('HeroHeader', renderComponent);
});

describe('Hero Body Component', () => {
    const renderComponent = (props: HeroBodyProps) =>
        render(<HeroBody {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('HeroBody');

        expect(component).toHaveTextContent(expected);
    });

    it('should have hero-body class', () => {
        const expected = 'hero-body';
        renderComponent({ className: 'foo-bar' });

        const component = screen.getByTestId('HeroBody');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('HeroBody', renderComponent);
});

describe('Hero Footer Component', () => {
    const renderComponent = (props: HeroFooterProps) =>
        render(<HeroFooter {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('HeroFooter');

        expect(component).toHaveTextContent(expected);
    });

    it('should have hero-foot class', () => {
        const expected = 'hero-foot';
        renderComponent({ className: 'foo-bar' });

        const component = screen.getByTestId('HeroFooter');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('HeroFooter', renderComponent);
});

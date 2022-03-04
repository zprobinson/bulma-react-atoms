import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';
import CardHeader from './CardHeader';
import CardHeaderTitle from './CardHeaderTitle';
import CardHeaderIcon from './CardHeaderIcon';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import {
    CardContentProps,
    CardFooterProps,
    CardHeaderIconProps,
    CardHeaderProps,
    CardHeaderTitleProps,
    CardImageProps,
    CardProps,
    CardFooterItemProps,
} from './Card.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

import CardFooterItem from './CardFooterItem';

describe('Card Component', () => {
    const renderComponent = (props: CardProps) => render(<Card {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Card');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Card', renderComponent);

    describe('Card Header Component', () => {
        const renderComponent = (props: CardHeaderProps) =>
            render(<CardHeader {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            renderComponent({ children: expected });

            const component = screen.getByTestId('CardHeader');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardHeader', renderComponent);
    });

    describe('Card Header Title Component', () => {
        const renderComponent = (props: CardHeaderTitleProps) =>
            render(<CardHeaderTitle {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            renderComponent({ children: expected });

            const component = screen.getByTestId('CardHeaderTitle');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardHeaderTitle', renderComponent);
    });

    describe('Card Header Icon Component', () => {
        const renderComponent = (props: CardHeaderIconProps) =>
            render(<CardHeaderIcon {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            renderComponent({ children: expected });

            const component = screen.getByTestId('CardHeaderIcon');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardHeaderIcon', renderComponent);
    });

    describe('Card Image Component', () => {
        const renderComponent = (props: CardImageProps) =>
            render(<CardImage {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            renderComponent({ children: expected });

            const component = screen.getByTestId('CardImage');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardImage', renderComponent);
    });

    describe('Card Content Component', () => {
        const renderComponent = (props: CardContentProps) =>
            render(<CardContent {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            renderComponent({ children: expected });

            const component = screen.getByTestId('CardContent');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardContent', renderComponent);
    });

    describe('Card Footer Component', () => {
        const renderComponent = (props: CardFooterProps) =>
            render(<CardFooter {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            renderComponent({ children: expected });

            const component = screen.getByTestId('CardFooter');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardFooter', renderComponent);
    });

    describe('Card Footer Item', () => {
        const renderComponent = <
            E extends React.ElementType = React.ElementType
        >(
            props: CardFooterItemProps<E>
        ) => render(<CardFooterItem {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            renderComponent({ children: expected });

            const component = screen.getByTestId('CardFooterItem');

            expect(component).toHaveTextContent(expected);
        });

        it('should have card-footer class', () => {
            const expected = 'card-footer';
            renderComponent({});

            const component = screen.getByTestId('CardFooterItem');

            expect(component).toHaveClass(expected);
        });

        it('should render as an anchor tag', () => {
            renderComponent({ href: 'test' });

            const component = screen.getByTestId('CardFooterItem');

            expect(component.tagName).toMatch(/a/i);
        });

        it('should render as a div tag', () => {
            renderComponent({ as: 'div' });

            const component = screen.getByTestId('CardFooterItem');

            expect(component.tagName).toMatch(/div/i);
        });

        testBulmaProps('CardFooterItem', renderComponent);
    });
});

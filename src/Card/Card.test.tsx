import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card';
import CardHeader from './CardHeader';
import CardHeaderTitle from './CardHeaderTitle';
import CardHeaderIcon from './CardHeaderIcon';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardFooterItemAnchor from './CardFooterItemAnchor';
import CardFooterItemParagraph from './CardFooterItemParagraph';
import {
    CardContentProps,
    CardFooterItemAnchorProps,
    CardFooterItemParagraphProps,
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
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Card');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Card', renderComponent);

    describe('Card Header Component', () => {
        const renderComponent = (props: CardHeaderProps) =>
            render(<CardHeader {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({ children: expected });

            const component = getByTestId('CardHeader');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardHeader', renderComponent);
    });

    describe('Card Header Title Component', () => {
        const renderComponent = (props: CardHeaderTitleProps) =>
            render(<CardHeaderTitle {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({ children: expected });

            const component = getByTestId('CardHeaderTitle');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardHeaderTitle', renderComponent);
    });

    describe('Card Header Icon Component', () => {
        const renderComponent = (props: CardHeaderIconProps) =>
            render(<CardHeaderIcon {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({ children: expected });

            const component = getByTestId('CardHeaderIcon');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardHeaderIcon', renderComponent);
    });

    describe('Card Image Component', () => {
        const renderComponent = (props: CardImageProps) =>
            render(<CardImage {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({ children: expected });

            const component = getByTestId('CardImage');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardImage', renderComponent);
    });

    describe('Card Content Component', () => {
        const renderComponent = (props: CardContentProps) =>
            render(<CardContent {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({ children: expected });

            const component = getByTestId('CardContent');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardContent', renderComponent);
    });

    describe('Card Footer Component', () => {
        const renderComponent = (props: CardFooterProps) =>
            render(<CardFooter {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({ children: expected });

            const component = getByTestId('CardFooter');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardFooter', renderComponent);
    });

    describe('Card Footer Item Anchor Component', () => {
        const renderComponent = (props: CardFooterItemAnchorProps) =>
            render(<CardFooterItemAnchor {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({
                children: expected,
            });

            const component = getByTestId('CardFooterItem');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('CardFooterItem', renderComponent);
    });

    describe('Card Footer Item Paragraph Component', () => {
        const renderComponent = (props: CardFooterItemParagraphProps) =>
            render(<CardFooterItemParagraph {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({
                children: expected,
            });

            const component = getByTestId('CardFooterItem');

            expect(component).toHaveTextContent(expected);
        });
    });

    describe('Card Footer Item', () => {
        const renderComponent = <
            E extends React.ElementType = React.ElementType
        >(
            props: CardFooterItemProps<E>
        ) => render(<CardFooterItem {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({ children: expected });

            const component = getByTestId('CardFooterItem');

            expect(component).toHaveTextContent(expected);
        });

        it('should have card-footer class', () => {
            const expected = 'card-footer';
            const { getByTestId } = renderComponent({});

            const component = getByTestId('CardFooterItem');

            expect(component).toHaveClass(expected);
        });

        it('should render as an anchor tag', () => {
            const { getByTestId } = renderComponent({ href: 'test' });

            const component = getByTestId('CardFooterItem');

            expect(component.tagName).toMatch(/a/i);
        });

        it('should render as a div tag', () => {
            const { getByTestId } = renderComponent({ as: 'div' });

            const component = getByTestId('CardFooterItem');

            expect(component.tagName).toMatch(/div/i);
        });

        testBulmaProps('CardFooterItem', renderComponent);
    });
});

// Generated with util/create-component.js
import React from 'react';
import { render, screen } from '@testing-library/react';

import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalCard from './ModalCard';
import ModalCardBody from './ModalCardBody';
import ModalCardFooter from './ModalCardFooter';
import ModalCardHeader from './ModalCardHeader';
import ModalCardTitle from './ModalCardTitle';
import {
    ModalProps,
    ModalContentProps,
    ModalCardProps,
    ModalCardBodyProps,
    ModalCardFooterProps,
    ModalCardHeaderProps,
    ModalCardTitleProps,
} from './Modal.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Modal Component', () => {
    const renderComponent = (props: ModalProps) => render(<Modal {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Modal');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Modal', renderComponent);
});

describe('Modal Content Component', () => {
    const renderComponent = (props: ModalContentProps) =>
        render(<ModalContent {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('ModalContent');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('ModalContent', renderComponent);
});

describe('Modal Card Component', () => {
    const renderComponent = (props: ModalCardProps) =>
        render(<ModalCard {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('ModalCard');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('ModalCard', renderComponent);
});

describe('Modal Card Body Component', () => {
    const renderComponent = (props: ModalCardBodyProps) =>
        render(<ModalCardBody {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('ModalCardBody');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('ModalCardBody', renderComponent);
});

describe('Modal Card Footer Component', () => {
    const renderComponent = (props: ModalCardFooterProps) =>
        render(<ModalCardFooter {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('ModalCardFooter');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('ModalCardFooter', renderComponent);
});

describe('Modal Card Header Component', () => {
    const renderComponent = (props: ModalCardHeaderProps) =>
        render(<ModalCardHeader {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('ModalCardHeader');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('ModalCardHeader', renderComponent);
});

describe('Modal Card Title Component', () => {
    const renderComponent = (props: ModalCardTitleProps) =>
        render(<ModalCardTitle {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('ModalCardTitle');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('ModalCardTitle', renderComponent);
});

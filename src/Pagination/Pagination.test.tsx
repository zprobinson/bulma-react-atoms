import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Pagination from './Pagination';
import PaginationPrevious from './PaginationPrevious';
import PaginationNext from './PaginationNext';
import PaginationList from './PaginationList';
import PaginationLink from './PaginationLink';
import PaginationEllipsis from './PaginationEllipsis';
import {
    PaginationProps,
    PaginationPreviousProps,
    PaginationNextProps,
    PaginationListProps,
    PaginationLinkProps,
    PaginationEllipsisProps,
} from './Pagination.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Pagination Component', () => {
    const renderComponent = (props: PaginationProps) =>
        render(<Pagination {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Pagination');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Pagination', renderComponent);
});

describe('Pagination Previous Component', () => {
    const renderComponent = <E extends React.ElementType>(
        props: PaginationPreviousProps<E>
    ) => render(<PaginationPrevious {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('PaginationPrevious');

        expect(component).toHaveTextContent(expected);
    });

    it('should render as <a> tag by default', () => {
        renderComponent({ href: '' });

        const component = screen.getByTestId('PaginationPrevious');

        expect(component.tagName).toMatch(/a/i);
    });

    it('should render as <div> tag', () => {
        renderComponent({ as: 'div' });

        const component = screen.getByTestId('PaginationPrevious');

        expect(component.tagName).toMatch(/div/i);
    });

    it('should call onClick when clicked', () => {
        const onClick = jest.fn();
        renderComponent({ onClick });

        const component = screen.getByTestId('PaginationPrevious');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when clicked if disabled is true', () => {
        const onClick = jest.fn();
        renderComponent({ onClick, disabled: true });

        const component = screen.getByTestId('PaginationPrevious');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(0);
    });

    it('should not call onClick when clicked if isDisabled is true', () => {
        const onClick = jest.fn();
        renderComponent({ onClick, isDisabled: true });

        const component = screen.getByTestId('PaginationPrevious');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(0);
    });

    testBulmaProps('PaginationPrevious', renderComponent);
});

describe('Pagination Next Component', () => {
    const renderComponent = <E extends React.ElementType>(
        props: PaginationNextProps<E>
    ) => render(<PaginationNext {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('PaginationNext');

        expect(component).toHaveTextContent(expected);
    });

    it('should render as <a> tag by default', () => {
        renderComponent({ href: '' });

        const component = screen.getByTestId('PaginationNext');

        expect(component.tagName).toMatch(/a/i);
    });

    it('should render as <div> tag', () => {
        renderComponent({ as: 'div' });

        const component = screen.getByTestId('PaginationNext');

        expect(component.tagName).toMatch(/div/i);
    });

    it('should call onClick when clicked', () => {
        const onClick = jest.fn();
        renderComponent({ onClick });

        const component = screen.getByTestId('PaginationNext');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when clicked if disabled is true', () => {
        const onClick = jest.fn();
        renderComponent({ onClick, disabled: true });

        const component = screen.getByTestId('PaginationNext');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(0);
    });

    it('should not call onClick when clicked if isDisabled is true', () => {
        const onClick = jest.fn();
        renderComponent({ onClick, isDisabled: true });

        const component = screen.getByTestId('PaginationNext');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(0);
    });

    testBulmaProps('PaginationNext', renderComponent);
});

describe('Pagination List Component', () => {
    const renderComponent = (props: PaginationListProps) =>
        render(<PaginationList {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: <li>{expected}</li>,
        });

        const component = screen.getByTestId('PaginationList');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PaginationList', renderComponent);
});

describe('Pagination Link Component', () => {
    const renderComponent = <E extends React.ElementType>(
        props: PaginationLinkProps<E>
    ) => render(<PaginationLink {...props} />);
    const testId = 'PaginationLink';

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: expected,
            textColor: 'has-text-black',
        });

        const component = screen.getByTestId(testId);

        expect(component).toHaveTextContent(expected);
    });

    it('should render as <a> tag by default', () => {
        renderComponent({ href: '' });

        const component = screen.getByTestId(testId);

        expect(component.tagName).toMatch(/a/i);
    });

    it('should render as <div> tag', () => {
        renderComponent({ as: 'div' });

        const component = screen.getByTestId(testId);

        expect(component.tagName).toMatch(/div/i);
    });

    it('should call onClick when clicked', () => {
        const onClick = jest.fn();
        renderComponent({ onClick });

        const component = screen.getByTestId(testId);
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when clicked if disabled is true', () => {
        const onClick = jest.fn();
        renderComponent({ onClick, disabled: true });

        const component = screen.getByTestId(testId);
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(0);
    });

    it('should not call onClick when clicked if isDisabled is true', () => {
        const onClick = jest.fn();
        renderComponent({ onClick, isDisabled: true });

        const component = screen.getByTestId(testId);
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(0);
    });

    testBulmaProps(testId, renderComponent);
});

describe('Pagination Ellipsis Component', () => {
    const renderComponent = (props: PaginationEllipsisProps) =>
        render(<PaginationEllipsis {...props} />);

    it('should render ellipsis entity &hellip; (u+2026)', () => {
        const expected = '\u2026';
        renderComponent({
            textColor: 'has-text-black',
        });

        const component = screen.getByTestId('PaginationEllipsis');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PaginationEllipsis', renderComponent);
});

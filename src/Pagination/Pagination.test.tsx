import React from 'react';
import { render } from '@testing-library/react';

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
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Pagination');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Pagination', renderComponent);
});

describe('Pagination Previous Component', () => {
    const renderComponent = (props: PaginationPreviousProps) =>
        render(<PaginationPrevious {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('PaginationPrevious');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PaginationPrevious', renderComponent);
});

describe('Pagination Next Component', () => {
    const renderComponent = (props: PaginationNextProps) =>
        render(<PaginationNext {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('PaginationNext');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PaginationNext', renderComponent);
});

describe('Pagination List Component', () => {
    const renderComponent = (props: PaginationListProps) =>
        render(<PaginationList {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({
            children: <li>{expected}</li>,
        });

        const component = getByTestId('PaginationList');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PaginationList', renderComponent);
});

describe('Pagination Link Component', () => {
    const renderComponent = (props: PaginationLinkProps) =>
        render(<PaginationLink {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({
            children: expected,
            textColor: 'has-text-black',
        });

        const component = getByTestId('PaginationLink');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PaginationLink', renderComponent);
});

describe('Pagination Ellipsis Component', () => {
    const renderComponent = (props: PaginationEllipsisProps) =>
        render(<PaginationEllipsis {...props} />);

    it('should render ellipsis entity &hellip; (u+2026)', () => {
        const expected = '\u2026';
        const { getByTestId } = renderComponent({
            textColor: 'has-text-black',
        });

        const component = getByTestId('PaginationEllipsis');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PaginationEllipsis', renderComponent);
});

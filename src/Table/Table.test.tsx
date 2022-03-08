// Generated with util/create-component.js
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { testBulmaProps } from '../bulmaTests/bulmaTests';
import Table from './Table';
import {
    TableBodyProps,
    TableContainerProps,
    TableDataCellProps,
    TableFooterProps,
    TableHeaderCellProps,
    TableHeaderProps,
    TableProps,
    TableRowProps,
} from './Table.types';
import TableBody from './TableBody';
import TableContainer from './TableContainer';
import TableDataCell from './TableDataCell';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';

afterEach(cleanup);

describe('Data Cell Component', () => {
    const renderComponent = (props: TableDataCellProps) =>
        render(<TableDataCell {...props} />, {
            container: document.body.appendChild(document.createElement('tr')),
        });

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('TableDataCell');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('TableDataCell', renderComponent);
});

describe('Header Cell Component', () => {
    const renderComponent = (props: TableHeaderCellProps) =>
        render(<TableHeaderCell {...props} />, {
            container: document.body.appendChild(document.createElement('tr')),
        });

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('TableHeaderCell');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('TableHeaderCell', renderComponent);
});

describe('Table Row Component', () => {
    const renderComponent = (props: TableRowProps) =>
        render(<TableRow {...props} />, {
            container: document.body.appendChild(
                document.createElement('tbody')
            ),
        });

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const children = <td>{expected}</td>;
        renderComponent({ children });

        const component = screen.getByTestId('TableRow');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('TableRow', renderComponent);
});

describe('Table Header Component', () => {
    const renderComponent = (props: TableHeaderProps) =>
        render(<TableHeader {...props} />, {
            container: document.body.appendChild(
                document.createElement('table')
            ),
        });

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const children = (
            <tr>
                <th>{expected}</th>
            </tr>
        );
        renderComponent({ children });

        const component = screen.getByTestId('TableHeader');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('TableHeader', renderComponent);
});

describe('Table Footer Component', () => {
    const renderComponent = (props: TableFooterProps) =>
        render(<TableFooter {...props} />, {
            container: document.body.appendChild(
                document.createElement('table')
            ),
        });

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const children = (
            <tr>
                <th>{expected}</th>
            </tr>
        );
        renderComponent({ children });

        const component = screen.getByTestId('TableFooter');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('TableFooter', renderComponent);
});

describe('Table Body Component', () => {
    const renderComponent = (props: TableBodyProps) =>
        render(<TableBody {...props} />, {
            container: document.body.appendChild(
                document.createElement('table')
            ),
        });

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const children = (
            <tr>
                <td>{expected}</td>
            </tr>
        );
        renderComponent({ children });

        const component = screen.getByTestId('TableBody');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('TableBody', renderComponent);
});

describe('Table Component', () => {
    const renderComponent = (props: TableProps) => render(<Table {...props} />);
    const stubChildren = (children: React.ReactNode = 'foobar') => (
        <tbody>
            <tr>
                <td>{children}</td>
            </tr>
        </tbody>
    );

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const children = stubChildren(expected);
        renderComponent({ children });

        const component = screen.getByTestId('Table');

        expect(component).toHaveTextContent(expected);
    });

    it('should render embedded table class', () => {
        const expected = 'table';
        const children = stubChildren();
        renderComponent({ children });

        const component = screen.getByTestId('Table');

        expect(component).toHaveClass(expected);
    });

    it('should render single modifier successfully', () => {
        const expected: TableProps['modifiers'] = 'is-bordered';
        const children = stubChildren();
        renderComponent({ children, modifiers: expected });

        const component = screen.getByTestId('Table');

        expect(component).toHaveClass(expected);
    });

    it('should render multiple modifiers successfully', () => {
        const modifiers: TableProps['modifiers'] = [
            'is-bordered',
            'is-fullwidth',
        ];
        const expected = 'is-bordered is-fullwidth';
        const children = stubChildren();
        renderComponent({ children, modifiers });

        const component = screen.getByTestId('Table');

        expect(component).toHaveClass(expected);
    });

    it('should render boolean flag isBordered successfully', () => {
        const isBordered: TableProps['isBordered'] = true;
        const expected = 'is-bordered';
        const children = stubChildren();
        renderComponent({ children, isBordered });

        const component = screen.getByTestId('Table');

        expect(component).toHaveClass(expected);
    });

    it('should render boolean flag isFullwidth successfully', () => {
        const isFullwidth: TableProps['isFullwidth'] = true;
        const expected = 'is-fullwidth';
        const children = stubChildren();
        renderComponent({ children, isFullwidth });

        const component = screen.getByTestId('Table');

        expect(component).toHaveClass(expected);
    });

    it('should render boolean flag isStriped successfully', () => {
        const isStriped: TableProps['isStriped'] = true;
        const expected = 'is-striped';
        const children = stubChildren();
        renderComponent({ children, isStriped });

        const component = screen.getByTestId('Table');

        expect(component).toHaveClass(expected);
    });

    it('should render boolean flag isNarrow successfully', () => {
        const isNarrow: TableProps['isNarrow'] = true;
        const expected = 'is-narrow';
        const children = stubChildren();
        renderComponent({ children, isNarrow });

        const component = screen.getByTestId('Table');

        expect(component).toHaveClass(expected);
    });

    it('should render boolean flag isHoverable successfully', () => {
        const isHoverable: TableProps['isHoverable'] = true;
        const expected = 'is-hoverable';
        const children = stubChildren();
        renderComponent({ children, isHoverable });

        const component = screen.getByTestId('Table');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Table', renderComponent);
});

describe('Table Container Component', () => {
    const renderComponent = (props: TableContainerProps) =>
        render(<TableContainer {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('TableContainer');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('TableContainer', renderComponent);
});

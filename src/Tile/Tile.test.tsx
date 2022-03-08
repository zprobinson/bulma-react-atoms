import React from 'react';
import { render, screen } from '@testing-library/react';

import Tile from './Tile';
import AncestorTile from './AncestorTile';
import ParentTile from './ParentTile';
import ChildTile from './ChildTile';
import {
    TileProps,
    AncestorTileProps,
    ParentTileProps,
    ChildTileProps,
} from './Tile.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Tile Component', () => {
    const renderComponent = (props: TileProps) => render(<Tile {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain the tile class', () => {
        const expected = 'tile';
        renderComponent({});

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    it('should contain the given kind class', () => {
        const expected: TileProps['kind'] = 'is-ancestor';
        renderComponent({ kind: expected });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    it('should contain the given tileSize class', () => {
        const expected: TileProps['tileSize'] = 'is-6';
        renderComponent({ tileSize: expected });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    it('should contain is-vertical class', () => {
        const expected = 'is-vertical';
        renderComponent({ isVertical: true });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    it('should contain the box class', () => {
        const expected = 'box';
        renderComponent({ boxed: true });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Tile', renderComponent);
});

describe('AncestorTile Component', () => {
    const renderComponent = (props: AncestorTileProps) =>
        render(<AncestorTile {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain the tile class', () => {
        const expected = 'tile';
        renderComponent({});

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    it('should contain the is-ancestor class', () => {
        const expected: TileProps['kind'] = 'is-ancestor';
        renderComponent({ className: 'foo-bar' });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Tile', renderComponent);
});

describe('ParentTile Component', () => {
    const renderComponent = (props: ParentTileProps) =>
        render(<ParentTile {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain the tile class', () => {
        const expected = 'tile';
        renderComponent({});

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    it('should contain the is-parent class', () => {
        const expected: TileProps['kind'] = 'is-parent';
        renderComponent({ className: 'foo-bar' });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Tile', renderComponent);
});

describe('ChildTile Component', () => {
    const renderComponent = (props: ChildTileProps) =>
        render(<ChildTile {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain the tile class', () => {
        const expected = 'tile';
        renderComponent({});

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    it('should contain the is-child class', () => {
        const expected: TileProps['kind'] = 'is-child';
        renderComponent({ className: 'foo-bar' });

        const component = screen.getByTestId('Tile');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Tile', renderComponent);
});

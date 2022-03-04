import React from 'react';
import { render, screen } from '@testing-library/react';

import Level from './Level';
import LevelLeft from './LevelLeft';
import LevelRight from './LevelRight';
import LevelItem from './LevelItem';
import {
    LevelProps,
    LevelLeftProps,
    LevelRightProps,
    LevelItemProps,
} from './Level.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Level Component', () => {
    const renderComponent = (props: LevelProps) => render(<Level {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: expected,
            isMobile: true,
        });

        const component = screen.getByTestId('Level');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Level', renderComponent);
});

describe('Level Left Component', () => {
    const renderComponent = (props: LevelLeftProps) =>
        render(<LevelLeft {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: expected,
        });

        const component = screen.getByTestId('LevelLeft');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('LevelLeft', renderComponent);
});

describe('Level Right Component', () => {
    const renderComponent = (props: LevelRightProps) =>
        render(<LevelRight {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: expected,
        });

        const component = screen.getByTestId('LevelRight');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('LevelRight', renderComponent);
});

describe('Level Item Component', () => {
    const renderComponent = (props: LevelItemProps) =>
        render(<LevelItem {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: expected,
        });

        const component = screen.getByTestId('LevelItem');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('LevelItem', renderComponent);
});

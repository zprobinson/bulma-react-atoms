import React from 'react';
import { render } from '@testing-library/react';

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
        const { getByTestId } = renderComponent({
            children: expected,
            isMobile: true,
        });

        const component = getByTestId('Level');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Level', renderComponent);
});

describe('Level Left Component', () => {
    const renderComponent = (props: LevelLeftProps) =>
        render(<LevelLeft {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({
            children: expected,
        });

        const component = getByTestId('LevelLeft');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('LevelLeft', renderComponent);
});

describe('Level Right Component', () => {
    const renderComponent = (props: LevelRightProps) =>
        render(<LevelRight {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({
            children: expected,
        });

        const component = getByTestId('LevelRight');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('LevelRight', renderComponent);
});

describe('Level Item Component', () => {
    const renderComponent = (props: LevelItemProps) =>
        render(<LevelItem {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({
            children: expected,
        });

        const component = getByTestId('LevelItem');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('LevelItem', renderComponent);
});

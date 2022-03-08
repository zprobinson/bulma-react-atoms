import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Tabs from './Tabs';
import TabsList from './TabsList';
import TabsListItem from './TabsListItem';
import { TabsProps, TabsListProps, TabsListItemProps } from './Tabs.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Tabs Component', () => {
    const renderComponent = (props: TabsProps) => render(<Tabs {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Tabs');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Tabs', renderComponent);
});

describe('Tabs List Component', () => {
    const renderComponent = (props: TabsListProps) =>
        render(<TabsList {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('TabsList');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('TabsList', renderComponent);
});

describe('Tabs List Item Component', () => {
    const renderComponent = (props: TabsListItemProps) =>
        render(<TabsListItem {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: expected,
            textColor: 'has-text-danger',
        });

        const component = screen.getByTestId('TabsListItem');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('TabsListItem', renderComponent);
});

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Tabs from './Tabs';
import TabsLink from './TabsLink';
import TabsList from './TabsList';
import TabsListItem from './TabsListItem';
import {
    TabsProps,
    TabsLinkProps,
    TabsListProps,
    TabsListItemProps,
} from './Tabs.types';
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

describe('Tabs Link Component', () => {
    const renderComponent = (props: TabsLinkProps) =>
        render(<TabsLink {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            children: expected,
            isActive: true,
            textColor: 'has-text-danger',
            innerListItemProps: {
                className: 'foo-bar',
            },
        });

        const component = screen.getByTestId('TabsLink');

        expect(component).toHaveTextContent(expected);
    });

    it('should recognize a single click', () => {
        const onClick = jest.fn();
        renderComponent({ onClick });

        const component = screen.getByTestId('TabsLinkAnchor');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    // in this component, bulma helpers are applied to the inner anchor tag.
    testBulmaProps('TabsLinkAnchor', renderComponent);
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

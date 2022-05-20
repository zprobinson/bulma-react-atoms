import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Panel from './Panel';
import PanelBlock from './PanelBlock';
import PanelHeading from './PanelHeading';
import PanelIcon from './PanelIcon';
import PanelTab from './PanelTab';
import PanelTabs from './PanelTabs';
import {
    PanelProps,
    PanelBlockProps,
    PanelHeadingProps,
    PanelIconProps,
    PanelTabProps,
    PanelTabsProps,
    PanelBlockDefault,
} from './Panel.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Panel Component', () => {
    const renderComponent = (props: PanelProps) => render(<Panel {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Panel');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Panel', renderComponent);
});

describe('Panel Heading Component', () => {
    const renderComponent = (props: PanelHeadingProps) =>
        render(<PanelHeading {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('PanelHeading');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PanelHeading', renderComponent);
});

describe('Panel Icon Component', () => {
    const renderComponent = (props: PanelIconProps) =>
        render(<PanelIcon {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('PanelIcon');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PanelIcon', renderComponent);
});

describe('Panel Tab Component', () => {
    const renderComponent = (props: PanelTabProps) =>
        render(<PanelTab {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('PanelTab');

        expect(component).toHaveTextContent(expected);
    });

    it('should render as <a> tag by default', () => {
        renderComponent({ href: '' });

        const component = screen.getByTestId('PanelTab');

        expect(component.tagName).toMatch(/a/i);
    });

    it('should recognize a single click', () => {
        const onClick = jest.fn();
        renderComponent({ onClick });

        const component = screen.getByTestId('PanelTab');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    testBulmaProps('PanelTab', renderComponent);
});

describe('Panel Tabs Component', () => {
    const renderComponent = (props: PanelTabsProps) =>
        render(<PanelTabs {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('PanelTabs');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('PanelTabs', renderComponent);
});

describe('Panel Block Component', () => {
    const renderComponent = <E extends React.ElementType = PanelBlockDefault>(
        props: PanelBlockProps<E>
    ) => render(<PanelBlock<E> {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('PanelBlock');

        expect(component).toHaveTextContent(expected);
    });

    it('should have panel-block class', () => {
        const expected = 'panel-block';
        renderComponent({});

        const component = screen.getByTestId('PanelBlock');

        expect(component).toHaveClass(expected);
    });

    it('should render as an div tag by default', () => {
        renderComponent({});

        const component = screen.getByTestId('PanelBlock');

        expect(component.tagName).toMatch(/div/i);
    });

    it('should render as an anchor tag', () => {
        renderComponent({ as: 'a', href: 'test' });

        const component = screen.getByTestId('PanelBlock');

        expect(component.tagName).toMatch(/a/i);
    });

    it('should render as a label tag', () => {
        renderComponent({
            as: 'label',
            htmlFor: 'test',
        });

        const component = screen.getByTestId('PanelBlock');

        expect(component.tagName).toMatch(/label/i);
    });

    testBulmaProps('PanelBlock', renderComponent);
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import { BreadcrumbItemProps, BreadcrumbProps } from './Breadcrumb.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Breadcrumb Component', () => {
    const renderComponent = (props: BreadcrumbProps) =>
        render(<Breadcrumb {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Breadcrumb');

        expect(component).toHaveTextContent(expected);
    });

    it("should have class 'breadcrumb'", () => {
        const expected = 'breadcrumb';
        renderComponent({});

        const component = screen.getByTestId('Breadcrumb');

        expect(component).toHaveClass(expected);
    });

    it('should have alignment is-centered', () => {
        const expected: BreadcrumbProps['alignment'] = 'is-centered';
        renderComponent({ alignment: expected });

        const component = screen.getByTestId('Breadcrumb');

        expect(component).toHaveClass(expected);
    });

    it('should have arrow separator', () => {
        const expected: BreadcrumbProps['separator'] = 'has-arrow-separator';
        renderComponent({ separator: expected });

        const component = screen.getByTestId('Breadcrumb');

        expect(component).toHaveClass(expected);
    });

    it('should be medium size', () => {
        const expected: BreadcrumbProps['size'] = 'is-medium';
        renderComponent({ size: expected });

        const component = screen.getByTestId('Breadcrumb');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Breadcrumb', renderComponent);

    describe('Breadcrumb Item Component', () => {
        const renderComponent = (props: BreadcrumbItemProps) =>
            render(<BreadcrumbItem {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            renderComponent({
                children: expected,
                className: 'foo-bar',
                isActive: true,
            });

            const component = screen.getByTestId('BreadcrumbItem');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('BreadcrumbItem', renderComponent);
    });
});

import React from 'react';
import { render } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import { BreadcrumbItemProps, BreadcrumbProps } from './Breadcrumb.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Breadcrumb Component', () => {
    const renderComponent = (props: BreadcrumbProps) =>
        render(<Breadcrumb {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Breadcrumb');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Breadcrumb', renderComponent);

    describe('Breadcrumb Item Component', () => {
        const renderComponent = (props: BreadcrumbItemProps) =>
            render(<BreadcrumbItem {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({
                children: expected,
                className: 'foo-bar',
                isActive: true,
            });

            const component = getByTestId('BreadcrumbItem');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('BreadcrumbItem', renderComponent);
    });
});

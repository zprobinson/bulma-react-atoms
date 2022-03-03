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

<<<<<<< HEAD
  it("should have class 'breadcrumb'", () => {
    const expected = "breadcrumb";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Breadcrumb");

    expect(component).toHaveClass(expected);
  });

  it("should have alignment is-centered", () => {
    const expected: BreadcrumbProps["alignment"] = 'is-centered';
    const { getByTestId } = renderComponent({ alignment: expected });

    const component = getByTestId("Breadcrumb");

    expect(component).toHaveClass(expected);
  });

  it("should have arrow separator", () => {
    const expected: BreadcrumbProps["separator"] = 'has-arrow-separator';
    const { getByTestId } = renderComponent({ separator: expected });

    const component = getByTestId("Breadcrumb");

    expect(component).toHaveClass(expected);
  });

  it("should be medium size", () => {
    const expected: BreadcrumbProps["size"] = 'is-medium';
    const { getByTestId } = renderComponent({ size: expected });

    const component = getByTestId("Breadcrumb");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("Breadcrumb", renderComponent);
=======
    testBulmaProps('Breadcrumb', renderComponent);
>>>>>>> development

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

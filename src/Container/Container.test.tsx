import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';
import { ContainerProps } from './Container.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Container Component', () => {
    const renderComponent = (props: ContainerProps) =>
        render(<Container {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Container');

        expect(component).toHaveTextContent(expected);
    });

<<<<<<< HEAD
  it("should have class 'container'", () => {
    const expected = "container";
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Container");

    expect(component).toHaveClass(expected);
  });

  it("should always render as a div tag", () => {
    const { getByTestId } = renderComponent({});

    const component = getByTestId("Container");

    expect(component.tagName).toMatch(/div/i);
  })

  it("should be fluid container", () => {
    const expected: ContainerProps["isFluid"] = true;
    const { getByTestId } = renderComponent({ isFluid: expected });

    const component = getByTestId("Container");

    expect(component).toHaveClass("is-fluid");
  });

  it("should not be fluid container", () => {
    const expected: ContainerProps["isFluid"] = false;
    const { getByTestId } = renderComponent({ isFluid: expected });

    const component = getByTestId("Container");

    expect(component).not.toHaveClass("is-fluid");
  });

  it("should be widescreen container", () => {
    const expected: ContainerProps["breakpoint"] = "is-widescreen";
    const { getByTestId } = renderComponent({ breakpoint: expected });

    const component = getByTestId("Container");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("Container", renderComponent);
=======
    testBulmaProps('Container', renderComponent);
>>>>>>> development
});

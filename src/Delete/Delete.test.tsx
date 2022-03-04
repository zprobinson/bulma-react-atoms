import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Delete from './Delete';
import { DeleteProps } from './Delete.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Delete Component', () => {
    const renderComponent = (props: DeleteProps) =>
        render(<Delete {...props} />);

    it('should recognize a single click', () => {
        const onClick = jest.fn();
        renderComponent({ onClick: onClick });

        const component = screen.getByTestId('Delete');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("should have class 'delete'", () => {
        const expected = 'delete';
        const onClick = jest.fn();
        renderComponent({ onClick });

        const component = screen.getByTestId('Delete');

        expect(component).toHaveClass(expected);
    });

    it('should always render as a button tag', () => {
        const onClick = jest.fn();
        renderComponent({ onClick });

        const component = screen.getByTestId('Delete');

        expect(component.tagName).toMatch(/button/i);
    });

    it('should have large size', () => {
        const expected: DeleteProps['size'] = 'is-large';
        const onClick = jest.fn();
        renderComponent({ onClick, size: expected });

        const component = screen.getByTestId('Delete');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Delete', renderComponent);
});

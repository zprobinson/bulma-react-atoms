import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Delete from './Delete';
import { DeleteProps } from './Delete.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Delete Component', () => {
    const renderComponent = (props: DeleteProps) =>
        render(<Delete {...props} />);

    it('should recognize a single click', () => {
        const onClick = jest.fn();
        const { getByTestId } = renderComponent({ onClick: onClick });

        const component = getByTestId('Delete');
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    testBulmaProps('Delete', renderComponent);
});

import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from './ProgressBar';
import { ProgressBarProps } from './ProgressBar.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Progress Bar Component', () => {
    const renderComponent = (props: ProgressBarProps) =>
        render(<ProgressBar {...props} />);

    it('should render value attribute correctly', () => {
        const value = '10%';
        const { getByTestId } = renderComponent({ value });

        const component = getByTestId('ProgressBar');

        expect(component).toHaveTextContent(value);
    });

    it('should not render any text value when not provided a value attribute', () => {
        const { queryByText } = renderComponent({});

        const component = queryByText(/./g);

        expect(component).not.toBeInTheDocument();
    });

    testBulmaProps('ProgressBar', renderComponent);
});

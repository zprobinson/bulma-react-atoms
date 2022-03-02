import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Notification from './Notification';
import { NotificationProps } from './Notification.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Notification Component', () => {
    const renderComponent = (props: NotificationProps) =>
        render(<Notification {...props} />);

    it('should render children text correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({
            children: expected,
            onClose: () => {},
        });

        const component = getByTestId('Notification');

        expect(component).toHaveTextContent(expected);
    });

    it('should register a click when delete button is clicked.', () => {
        const onClick = jest.fn();
        const { getByTestId } = renderComponent({ onClose: onClick });

        const closeButton = getByTestId('NotificationDelete');
        fireEvent.click(closeButton);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    testBulmaProps('Notification', renderComponent);
});

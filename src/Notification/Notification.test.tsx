import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Notification from './Notification';
import { NotificationProps } from './Notification.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Notification Component', () => {
    const renderComponent = (props: NotificationProps) =>
        render(<Notification {...props} />);

    it('should render children text correctly', () => {
        const expected = 'harvey was here';
        const onClose = jest.fn();
        renderComponent({
            children: expected,
            onClose,
        });

        const component = screen.getByTestId('Notification');

        expect(component).toHaveTextContent(expected);
    });

    it('should register a click when delete button is clicked.', () => {
        const onClick = jest.fn();
        renderComponent({ onClose: onClick });

        const closeButton = screen.getByTestId('NotificationDelete');
        fireEvent.click(closeButton);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    testBulmaProps('Notification', renderComponent);
});

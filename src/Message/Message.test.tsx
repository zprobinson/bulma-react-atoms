import React from 'react';
import { render } from '@testing-library/react';

import Message from './Message';
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';
import {
    MessageBodyProps,
    MessageHeaderProps,
    MessageProps,
} from './Message.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';

describe('Message Component', () => {
    const renderComponent = (props: MessageProps) =>
        render(<Message {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Message');

        expect(component).toHaveTextContent(expected);
    });

    testBulmaProps('Message', renderComponent);

    describe('Message Header Component', () => {
        const renderComponent = (props: MessageHeaderProps) =>
            render(<MessageHeader {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({ children: expected });

            const component = getByTestId('MessageHeader');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('MessageHeader', renderComponent);
    });

    describe('Message Body Component', () => {
        const renderComponent = (props: MessageBodyProps) =>
            render(<MessageBody {...props} />);

        it('should render children correctly', () => {
            const expected = 'harvey was here';
            const { getByTestId } = renderComponent({ children: expected });

            const component = getByTestId('MessageBody');

            expect(component).toHaveTextContent(expected);
        });

        testBulmaProps('MessageBody', renderComponent);
    });
});

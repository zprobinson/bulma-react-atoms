import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { MessageProps } from './Message.types';

const Message: React.FC<MessageProps> = ({ color, size, ...props }) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        color ?? '',
        size ?? ''
    );
    return (
        <article
            data-testid="Message"
            className={`message ${classNames}`}
            {...rest}
        ></article>
    );
};

export default Message;

import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { MessageBodyProps } from './Message.types';

const MessageBody: React.FC<MessageBodyProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="MessageBody"
            className={`message-body ${classNames}`}
            {...rest}
        ></div>
    );
};

export default MessageBody;

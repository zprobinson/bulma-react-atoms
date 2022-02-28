import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { MessageHeaderProps } from './Message.types';

const MessageHeader: React.FC<MessageHeaderProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="MessageHeader"
            className={`message-header ${classNames}`}
            {...rest}
        ></div>
    );
};

export default MessageHeader;

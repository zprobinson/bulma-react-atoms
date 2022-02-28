import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { CardContentProps } from './Card.types';

const CardContent: React.FC<CardContentProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="CardContent"
            className={`card-content ${classNames}`}
            {...rest}
        ></div>
    );
};

export default CardContent;

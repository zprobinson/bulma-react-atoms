import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { CardHeaderProps } from './Card.types';

const CardHeader: React.FC<CardHeaderProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <header
            data-testid="CardHeader"
            className={`card-header ${classNames}`}
            {...rest}
        ></header>
    );
};

export default CardHeader;

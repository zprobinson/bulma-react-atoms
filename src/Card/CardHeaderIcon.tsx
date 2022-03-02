import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { CardHeaderIconProps } from './Card.types';

const CardHeaderIcon: React.FC<CardHeaderIconProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <button
            data-testid="CardHeaderIcon"
            className={`card-header-icon ${classNames}`}
            {...rest}
        ></button>
    );
};

export default CardHeaderIcon;

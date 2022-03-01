import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { CardFooterProps } from './Card.types';

const CardFooter: React.FC<CardFooterProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <footer
            data-testid="CardFooter"
            className={`card-footer ${classNames}`}
            {...rest}
        ></footer>
    );
};

export default CardFooter;

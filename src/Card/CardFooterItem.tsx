import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { CardFooterItemProps, CardFooterItemDefault } from './Card.types';

const _default_element_ = 'a';

const CardFooterItem = <E extends React.ElementType = CardFooterItemDefault>({
    as,
    ...props
}: CardFooterItemProps<E>) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    const Component = as ?? _default_element_;
    return (
        <Component
            data-testid="CardFooterItem"
            className={`card-footer ${classNames}`}
            {...rest}
        ></Component>
    );
};

export default CardFooterItem;

import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { ContainerProps } from './Container.types';

const Container: React.FC<ContainerProps> = ({
    breakpoint,
    isFluid = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        breakpoint ?? '',
        isFluid ? 'is-fluid' : ''
    );

    return (
        <div
            data-testid="Container"
            className={`container ${classNames}`}
            {...rest}
        ></div>
    );
};

export default Container;

import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { DynamicHeadingElement, TitleProps } from './Title.types';

const Title: React.FC<TitleProps> = ({
    size = '3',
    isSpaced = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        `is-${size}`,
        isSpaced ? 'is-spaced' : ''
    );
    const Component = `h${size}` as DynamicHeadingElement;

    return (
        <Component
            data-testid="Title"
            className={`title ${classNames}`}
            {...rest}
        ></Component>
    );
};

export default Title;

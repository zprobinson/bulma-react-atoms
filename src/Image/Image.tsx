import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { ImageProps } from './Image.types';

const Image: React.FC<ImageProps> = ({
    children,
    dimension,
    imgProps,
    isFullwidth = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        dimension ?? '',
        isFullwidth ? 'is-fullwidth' : ''
    );

    return (
        <figure data-testid="Image" className={`image ${classNames}`} {...rest}>
            {children ?? <img {...imgProps} />}
        </figure>
    );
};

export default Image;

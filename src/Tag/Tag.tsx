import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TagProps, TagDefault } from './Tag.types';

const _default_element_ = 'span';

const Tag = <E extends React.ElementType = TagDefault>({
    as,
    color,
    size,
    isDelete = false,
    ...props
}: TagProps<E>) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        color ?? '',
        size ?? '',
        isDelete ? 'is-delete' : ''
    );
    const Component = as ?? _default_element_;

    return (
        <Component
            data-testid="Tag"
            className={`tag ${classNames}`}
            {...rest}
        ></Component>
    );
};

export default Tag;

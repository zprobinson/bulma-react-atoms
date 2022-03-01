import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TagsProps } from './Tags.types';

const Tags: React.FC<TagsProps> = ({
    groupSize,
    hasAddons = false,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        groupSize ?? '',
        hasAddons ? 'has-addons' : ''
    );

    return (
        <div
            data-testid="Tags"
            className={`tags ${classNames}`}
            {...rest}
        ></div>
    );
};

export default Tags;

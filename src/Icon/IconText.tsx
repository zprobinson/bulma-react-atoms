import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { IconTextProps } from './Icon.types';

const IconText: React.FC<IconTextProps> = ({ as = 'span', ...props }) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    const RenderAs = as;

    return (
        <RenderAs
            data-testid="IconText"
            className={`icon-text ${classNames}`}
            {...rest}
        ></RenderAs>
    );
};

export default IconText;

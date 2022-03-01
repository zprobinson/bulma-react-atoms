import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { MediaLeftProps } from './MediaObject.types';

const MediaLeft: React.FC<MediaLeftProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <figure
            data-testid="MediaLeft"
            className={classNames}
            {...rest}
        ></figure>
    );
};

export default MediaLeft;

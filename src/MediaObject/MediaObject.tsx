import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { MediaObjectProps } from './MediaObject.types';

const MediaObject: React.FC<MediaObjectProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <article
            data-testid="MediaObject"
            className={classNames}
            {...rest}
        ></article>
    );
};

export default MediaObject;

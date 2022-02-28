import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { MediaContentProps } from './MediaObject.types';

const MediaContent: React.FC<MediaContentProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div data-testid="MediaContent" className={classNames} {...rest}></div>
    );
};

export default MediaContent;

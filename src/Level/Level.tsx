import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { LevelProps } from './Level.types';

const Level: React.FC<LevelProps> = ({ isMobile, ...props }) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isMobile ? 'is-mobile' : ''
    );
    return (
        <div
            data-testid="Level"
            className={`level ${classNames}`}
            {...rest}
        ></div>
    );
};

export default Level;

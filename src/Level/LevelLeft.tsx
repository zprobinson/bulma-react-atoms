import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { LevelLeftProps } from './Level.types';

const LevelLeft: React.FC<LevelLeftProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="LevelLeft"
            className={`level-left ${classNames}`}
            {...rest}
        ></div>
    );
};

export default LevelLeft;

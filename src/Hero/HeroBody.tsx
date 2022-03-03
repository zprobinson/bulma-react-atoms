import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { HeroBodyProps } from './Hero.types';

const HeroBody: React.FC<HeroBodyProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="HeroBody"
            className={`hero-body ${classNames}`}
            {...rest}
        ></div>
    );
};

export default HeroBody;

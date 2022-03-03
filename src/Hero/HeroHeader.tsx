import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { HeroHeaderProps } from './Hero.types';

const HeroHeader: React.FC<HeroHeaderProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="HeroHeader"
            className={`hero-head ${classNames}`}
            {...rest}
        ></div>
    );
};

export default HeroHeader;

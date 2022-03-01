import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { HeroProps, __FULLHEIGHT_WITH_NAVBAR__ } from './Hero.types';

const Hero: React.FC<HeroProps> = ({
    color,
    size,
    isFullHeightWithNavbar = false,
    ...props
}) => {
    const sizeClass = isFullHeightWithNavbar
        ? __FULLHEIGHT_WITH_NAVBAR__
        : size;
    const { classNames, rest } = useInnerBulmaProps(
        props,
        color ?? '',
        sizeClass ?? ''
    );
    return (
        <section
            data-testid="Hero"
            className={`hero ${classNames}`}
            {...rest}
        ></section>
    );
};

export default Hero;

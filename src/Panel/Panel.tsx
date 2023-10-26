import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PanelProps } from './Panel.types';

const bulmafyColor = (color: string | undefined) => {
    if (color === undefined) return '';
    return color.includes('is') ? color : `is-${color}`;
};

const Panel: React.FC<PanelProps> = ({ color, ...props }) => {
    const { classNames, rest } = useInnerBulmaProps(props, bulmafyColor(color));

    return (
        <nav
            data-testid="Panel"
            className={`panel ${classNames}`}
            {...rest}
        ></nav>
    );
};

export default Panel;

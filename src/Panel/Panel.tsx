import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PanelProps } from './Panel.types';

const Panel: React.FC<PanelProps> = ({ color, ...props }) => {
    const { classNames, rest } = useInnerBulmaProps(props, color ?? '');

    return (
        <nav
            data-testid="Panel"
            className={`panel ${classNames}`}
            {...rest}
        ></nav>
    );
};

export default Panel;

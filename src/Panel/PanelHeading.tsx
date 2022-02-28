import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PanelHeadingProps } from './Panel.types';

const PanelHeading: React.FC<PanelHeadingProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <p
            data-testid="PanelHeading"
            className={`panel-heading ${classNames}`}
            {...rest}
        ></p>
    );
};

export default PanelHeading;

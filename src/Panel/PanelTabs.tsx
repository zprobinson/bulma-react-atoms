import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PanelTabsProps } from './Panel.types';

const PanelTabs: React.FC<PanelTabsProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <p
            data-testid="PanelTabs"
            className={`panel-tabs ${classNames}`}
            {...rest}
        ></p>
    );
};

export default PanelTabs;

import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PanelTabProps } from './Panel.types';

const _default_element_ = 'a';

const PanelTab = <E extends React.ElementType = typeof _default_element_>({
    as,
    isActive = false,
    ...props
}: PanelTabProps<E>) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        isActive ? 'is-active' : ''
    );
    const Component = as ?? _default_element_;

    return (
        <Component
            data-testid="PanelTab"
            className={classNames}
            {...rest}
        ></Component>
    );
};

export default PanelTab;

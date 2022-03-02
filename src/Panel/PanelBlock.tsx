import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PanelBlockProps } from './Panel.types';

const _default_element_ = 'div';

const PanelBlock = <E extends React.ElementType = typeof _default_element_>({
    as,
    ...props
}: PanelBlockProps<E>) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    const Component = as ?? _default_element_;

    return (
        <Component
            data-testid="PanelBlock"
            className={`panel-block ${classNames}`}
            {...rest}
        ></Component>
    );
};

export default PanelBlock;

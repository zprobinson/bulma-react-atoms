import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { PanelBlockProps, PanelBlockDefault } from './Panel.types';

const _default_element_ = 'div';

const PanelBlock = <E extends React.ElementType = PanelBlockDefault>({
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

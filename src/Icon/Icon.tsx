import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { IconProps } from './Icon.types';

const Icon: React.FC<IconProps> = ({
    children,
    containerSize,
    iconFontClass,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(props, containerSize ?? '');
    return (
        <span data-testid="Icon" className={`icon ${classNames}`} {...rest}>
            {children ?? <i className={iconFontClass}></i>}
        </span>
    );
};

export default Icon;

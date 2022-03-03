import React from 'react';
import { ButtonsProps } from './Button.types';
import { useInnerBulmaProps } from '../utilities/propUtilities';

const Buttons: React.FC<ButtonsProps> = ({
    hasAddons = false,
    alignment,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(
        props,
        hasAddons ? 'has-addons' : '',
        alignment ?? ''
    );
    return (
        <div
            data-testid="Buttons"
            className={`buttons ${classNames}`}
            {...rest}
        ></div>
    );
};

export default Buttons;

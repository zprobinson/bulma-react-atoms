import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormFileIconProps } from './Form.types';

const FormFileIcon: React.FC<FormFileIconProps> = ({
    children,
    iconFontClass,
    ...props
}) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <span
            data-testid="FormFileIcon"
            className={`file-icon ${classNames}`}
            {...rest}
        >
            {children ?? <i className={iconFontClass}></i>}
        </span>
    );
};

export default FormFileIcon;

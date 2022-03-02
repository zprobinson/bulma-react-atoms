import React from 'react';
import { FormHelpProps } from './Form.types';
import { useInnerBulmaProps } from '../utilities/propUtilities';

const FormHelp: React.FC<FormHelpProps> = ({ color, ...props }) => {
    const { classNames, rest } = useInnerBulmaProps(props, color ?? '');
    return (
        <p
            data-testid="FormHelp"
            className={`help ${classNames}`}
            {...rest}
        ></p>
    );
};

export default FormHelp;

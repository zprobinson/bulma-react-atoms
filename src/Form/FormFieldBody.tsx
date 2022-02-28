import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormFieldBodyProps } from './Form.types';

const FormFieldBody: React.FC<FormFieldBodyProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="FormFieldBody"
            className={`field-body ${classNames}`}
            {...rest}
        ></div>
    );
};

export default FormFieldBody;

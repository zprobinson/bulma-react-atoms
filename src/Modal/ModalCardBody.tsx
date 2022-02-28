import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { ModalCardBodyProps } from './Modal.types';

const ModalCardBody: React.FC<ModalCardBodyProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <section
            data-testid="ModalCardBody"
            className={`modal-card-body ${classNames}`}
            {...rest}
        ></section>
    );
};

export default ModalCardBody;

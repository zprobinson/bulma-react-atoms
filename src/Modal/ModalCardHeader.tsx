import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { ModalCardHeaderProps } from './Modal.types';

const ModalCardHeader: React.FC<ModalCardHeaderProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <header
            data-testid="ModalCardHeader"
            className={`modal-card-head ${classNames}`}
            {...rest}
        ></header>
    );
};

export default ModalCardHeader;

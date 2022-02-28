import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { ModalCardProps } from './Modal.types';

const ModalCard: React.FC<ModalCardProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="ModalCard"
            className={`modal-card ${classNames}`}
            {...rest}
        ></div>
    );
};

export default ModalCard;

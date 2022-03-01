import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { ModalContentProps } from './Modal.types';

const ModalContent: React.FC<ModalContentProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <div
            data-testid="ModalContent"
            className={`modal-content ${classNames}`}
            {...rest}
        ></div>
    );
};

export default ModalContent;

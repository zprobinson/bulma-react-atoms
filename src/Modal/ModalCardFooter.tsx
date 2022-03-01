import React from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { ModalCardFooterProps } from './Modal.types';

const ModalCardFooter: React.FC<ModalCardFooterProps> = (props) => {
    const { classNames, rest } = useInnerBulmaProps(props);
    return (
        <footer
            data-testid="ModalCardFooter"
            className={`modal-card-foot ${classNames}`}
            {...rest}
        ></footer>
    );
};

export default ModalCardFooter;

import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { ModalProps } from "./Modal.types";

const Modal: React.FC<ModalProps> = ({ isActive = false, ...props }) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    isActive ? "is-active" : ""
  );
  return (
    <div data-testid="Modal" className={`modal ${classNames}`} {...rest}></div>
  );
};

export default Modal;

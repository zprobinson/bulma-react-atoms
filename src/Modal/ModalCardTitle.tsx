import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { ModalCardTitleProps } from "./Modal.types";

const ModalCardTitle: React.FC<ModalCardTitleProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <p
      data-testid="ModalCardTitle"
      className={`modal-card-title ${classNames}`}
      {...rest}
    ></p>
  );
};

export default ModalCardTitle;

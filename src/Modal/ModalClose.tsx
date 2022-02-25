import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { ModalCloseProps } from "./Modal.types";

const ModalClose: React.VFC<ModalCloseProps> = ({
  size = "is-large",
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(props, size);
  return (
    <button
      data-testid="ModalClose"
      className={`modal-close ${classNames}`}
      {...rest}
    ></button>
  );
};

export default ModalClose;

import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { ModalBackgroundProps } from "./Modal.types";

const ModalBackground: React.VFC<ModalBackgroundProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div
      data-testid="ModalBackground"
      className={`modal-background ${classNames}`}
      {...rest}
    ></div>
  );
};

export default ModalBackground;

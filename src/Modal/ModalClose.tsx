import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerModalCloseProps } from "./Modal.types";

const ModalClose: React.VFC<Omit<InnerModalCloseProps, "children">> = ({
  className,
  size = "is-large",
  ...props
}) => {
  const classNames = foldClassNames([className ?? "", size]);

  return (
    <button
      data-testid="ModalClose"
      className={`modal-close ${classNames}`}
      {...props}
    ></button>
  );
};

export default withBulmaProps(ModalClose);

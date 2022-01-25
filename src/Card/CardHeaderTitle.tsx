import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerCardHeaderTitleProps } from "./Card.types";

const CardHeaderTitle: React.FC<InnerCardHeaderTitleProps> = ({
  children,
  className,
  isCentered,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isCentered ? "is-centered" : "",
  ]);

  return (
    <p
      data-testid="CardHeaderTitle"
      className={`card-header-title ${classNames}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default withBulmaProps(CardHeaderTitle);

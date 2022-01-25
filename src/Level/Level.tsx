import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerLevelProps } from "./Level.types";

const Level: React.FC<InnerLevelProps> = ({
  children,
  className,
  isMobile,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isMobile ? "is-mobile" : "",
  ]);

  return (
    <div data-testid="Level" className={`level ${classNames}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Level);

import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerContentProps } from "./Content.types";

const Content: React.FC<InnerContentProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  const classNames = foldClassNames([className ?? "", size ?? ""]);

  return (
    <div data-testid="Content" className={`content ${classNames}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Content);

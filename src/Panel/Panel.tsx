import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { PanelProps } from "./Panel.types";

const Panel: React.FC<PanelProps> = ({
  children,
  className,
  color,
  ...props
}) => {
  const classNames = foldClassNames([className ?? "", color ?? ""]);

  return (
    <nav data-testid="Panel" className={`panel ${classNames}`} {...props}>
      {children}
    </nav>
  );
};

export default withBulmaProps(Panel);

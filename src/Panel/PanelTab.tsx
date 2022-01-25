import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import { InnerPanelTabProps } from "./Panel.types";

const PanelTab: React.FC<InnerPanelTabProps> = ({
  children,
  className,
  isActive = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
  ]);

  return (
    <a data-testid="PanelTab" className={classNames} {...props}>
      {children}
    </a>
  );
};

export default withBulmaProps(PanelTab);

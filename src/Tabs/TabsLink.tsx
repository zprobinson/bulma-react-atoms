import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerTabsLinkProps } from "./Tabs.types";

const TabsLink: React.FC<InnerTabsLinkProps> = ({
  children,
  className,
  isActive = false,
  innerListItemProps,
  ...props
}) => {
  const { className: liClassName = "", ...liProps } = innerListItemProps ?? {};
  const classNames = foldClassNames([
    liClassName ?? "",
    isActive ? "is-active" : "",
  ]);

  return (
    <li data-testid="TabsLink" className={classNames} {...liProps}>
      <a data-testid="TabsLinkAnchor" className={className} {...props}>
        {children}
      </a>
    </li>
  );
};

export default withBulmaProps(TabsLink);

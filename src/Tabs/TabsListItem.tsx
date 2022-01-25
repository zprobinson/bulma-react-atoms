import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerTabsListItemProps } from "./Tabs.types";

/**
 * _TabsListItem_ is only intended for use if you need to manually set the
 * inner anchor tag as a specialized component such as _NavLink_ from _react-router_.
 * In all other cases use the _TabsLink_ component.
 * \
 * \
 * If you need to customize the props for the
 * embedded list item component in the _TabsLink_ component,
 * use the given _innerListItemProps_ prop instead.
 * @see TabsLink
 */
const TabsListItem: React.FC<InnerTabsListItemProps> = ({
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
    <li data-testid="TabsListItem" className={classNames} {...props}>
      {children}
    </li>
  );
};

export default withBulmaProps(TabsListItem);

import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerMenuListItemProps } from "./Menu.types";

const MenuListItem: React.FC<InnerMenuListItemProps> = ({
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
    <li data-testid="MenuListItem">
      <a data-testid="MenuListItemAnchor" className={classNames} {...props}>
        {children}
      </a>
    </li>
  );
};

export default withBulmaProps(MenuListItem);

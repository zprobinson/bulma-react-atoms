import React from "react";
import withBulmaProps from "../bulma";
import { Icon } from "../Icon";
import { foldClassNames } from "../utilities/listUtils";

import { InnerFormIconProps } from "./Form.types";

const FormIcon: React.FC<InnerFormIconProps> = ({
  className,
  alignment,
  ...props
}) => {
  const classNames = foldClassNames([className ?? "", alignment ?? ""]);

  return <Icon className={classNames} {...props} />;
};

export default withBulmaProps(FormIcon);

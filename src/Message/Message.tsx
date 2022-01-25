import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerMessageProps } from "./Message.types";

const Message: React.FC<InnerMessageProps> = ({
  children,
  className,
  color,
  size,
  ...props
}) => {
  const classNames = foldClassNames([className ?? "", color ?? "", size ?? ""]);

  return (
    <article
      data-testid="Message"
      className={`message ${classNames}`}
      {...props}
    >
      {children}
    </article>
  );
};

export default withBulmaProps(Message);

import React from "react";
import { Delete } from "../Delete";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerNotificationProps } from "./Notification.types";

const Notification: React.FC<InnerNotificationProps> = ({
  children,
  className,
  onClose,
  color,
  deleteProps,
  ...props
}) => {
  const classNames = foldClassNames([className ?? "", color ?? ""]);

  return (
    <div
      data-testid="Notification"
      className={`notification ${classNames}`}
      {...props}
    >
      <Delete
        data-testid="NotificationDelete"
        onClick={onClose}
        {...deleteProps}
      />
      {children}
    </div>
  );
};

export default withBulmaProps(Notification);

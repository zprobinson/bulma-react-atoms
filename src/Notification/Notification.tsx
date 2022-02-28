import React from "react";
import { Delete } from "../Delete";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { NotificationProps } from "./Notification.types";

const Notification: React.FC<NotificationProps> = ({
  children,
  onClose,
  color,
  deleteProps,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(props, color ?? "");

  return (
    <div
      data-testid="Notification"
      className={`notification ${classNames}`}
      {...rest}
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

export default Notification;

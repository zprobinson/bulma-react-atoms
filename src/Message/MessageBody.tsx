import React from "react";
import withBulmaProps from "../bulma";

const MessageBody: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="MessageBody"
      className={`message-body ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(MessageBody);

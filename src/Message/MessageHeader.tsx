import React from "react";
import withBulmaProps from "../bulma";

const MessageHeader: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="MessageHeader"
      className={`message-header ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(MessageHeader);

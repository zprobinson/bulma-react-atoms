import React from "react";
import withBulmaProps from "../bulma";

const MediaContent: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div data-testid="MediaContent" className={className} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(MediaContent);

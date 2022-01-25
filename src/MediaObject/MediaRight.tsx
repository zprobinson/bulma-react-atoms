import React from "react";
import withBulmaProps from "../bulma";

const MediaRight: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div data-testid="MediaRight" className={className} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(MediaRight);

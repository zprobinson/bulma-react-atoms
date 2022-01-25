import React from "react";
import withBulmaProps from "../bulma";

const MediaLeft: React.FC<React.ComponentPropsWithoutRef<"figure">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <figure data-testid="MediaLeft" className={className} {...props}>
      {children}
    </figure>
  );
};

export default withBulmaProps(MediaLeft);

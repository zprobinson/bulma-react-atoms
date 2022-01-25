import React from "react";
import withBulmaProps from "../bulma";

const MediaObject: React.FC<React.ComponentPropsWithoutRef<"article">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <article data-testid="MediaObject" className={className} {...props}>
      {children}
    </article>
  );
};

export default withBulmaProps(MediaObject);

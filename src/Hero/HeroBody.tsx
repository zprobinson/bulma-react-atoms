import React from "react";
import withBulmaProps from "../bulma";

const HeroBody: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-testid="HeroBody"
      className={`hero-body ${className}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(HeroBody);

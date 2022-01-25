import React from "react";
import withBulmaProps from "../bulma";

const HeroHeader: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-testid="HeroHeader"
      className={`hero-head ${className}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(HeroHeader);

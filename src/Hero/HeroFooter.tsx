import React from "react";
import withBulmaProps from "../bulma";

const HeroFooter: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-testid="HeroFooter"
      className={`hero-foot ${className}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(HeroFooter);

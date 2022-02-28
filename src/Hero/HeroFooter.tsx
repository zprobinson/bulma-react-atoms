import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { HeroFooterProps } from "./Hero.types";

const HeroFooter: React.FC<HeroFooterProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div
      data-testid="HeroFooter"
      className={`hero-foot ${classNames}`}
      {...rest}
    ></div>
  );
};

export default HeroFooter;

import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { FooterProps } from "./Footer.types";

const Footer: React.FC<FooterProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div
      data-testid="Footer"
      className={`footer ${classNames}`}
      {...rest}
    ></div>
  );
};

export default Footer;

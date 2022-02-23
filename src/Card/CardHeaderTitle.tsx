import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { CardHeaderTitleProps } from "./Card.types";

const CardHeaderTitle: React.FC<CardHeaderTitleProps> = ({
  isCentered,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(props);

  return (
    <p
      data-testid="CardHeaderTitle"
      className={`card-header-title ${classNames}`}
      {...rest}
    ></p>
  );
};

export default CardHeaderTitle;

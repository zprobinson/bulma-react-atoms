import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { CardImageProps } from "./Card.types";

const CardImage: React.FC<CardImageProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div
      data-testid="CardImage"
      className={`card-image ${classNames}`}
      {...rest}
    ></div>
  );
};

export default CardImage;
